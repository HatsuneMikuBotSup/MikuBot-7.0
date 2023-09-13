import { ApplicationCommandOptionType, Client, PermissionFlagsBits } from "discord.js";
import { ErrorHandler } from "./errorHandler";
import { activeCommands } from "./activeCommands";


activeCommands.forEach((x) => {
    x.file = require("../" + x.uri);
});

export class CommandHandler {
    client: Client;
    errorHandler: ErrorHandler;
    constructor(client: Client, errorHandler: ErrorHandler) {
        this.client = client;
        this.errorHandler = errorHandler
    }
    async handle(interaction: any) {
        const commandInteraction: any = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        const commandFunction: Function = activeCommand.file[commandInteraction];
        if (!commandFunction) return;
        const args = interaction.options.data;
        commandFunction(interaction, args, this.errorHandler);
    }
    registerCommands() {
        console.log("Registering commands");
        this.client.application?.commands.set(activeCommands);
    }
}


