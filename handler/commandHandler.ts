import { LoggerHandler } from "./loggerHandler";
import { activeCommands } from "./activeCommands";


activeCommands.forEach((x) => {
    x.file = require("../" + x.uri);
});

export class CommandHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
    async handle(interaction: any) {
        const commandInteraction: string = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        //get default export from activecommand.file
        const commandFunction: Function = (activeCommand.file as { default: Function }).default;
        if (!commandFunction) return;

        const args = interaction.options.data;
        this.loggerHandler.log("CommandHandler", `${commandInteraction} was executed by ${interaction.user.tag}`);
        commandFunction(interaction, args, this.loggerHandler, activeCommands, this.client);
    }
    async registerCommands() {
        return await this.client.application?.commands.set(activeCommands).then(this.loggerHandler.log("CommandHandler", "Registered Slash commands"));
    }
}


