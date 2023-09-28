import { ApplicationCommandOptionType, Client, PermissionFlagsBits } from "discord.js";
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
        this.loggerHandler = loggerHandler
    }
    async handle(interaction: any) {
        const commandInteraction: any = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        const commandFunction: Function = activeCommand.file[commandInteraction];
        if (!commandFunction) return;
        const args = interaction.options.data;
        commandFunction(interaction, args, this.loggerHandler, activeCommands);
    }
    registerCommands() {
        console.log("Registering commands");
        this.client.application?.commands.set(activeCommands);
    }
}


