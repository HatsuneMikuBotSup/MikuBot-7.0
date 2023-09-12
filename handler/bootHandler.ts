import { Client } from "discord.js";
import { ErrorHandler } from "./errorHandler";
import { CommandHandler } from "./commandHandler";

export class BootHandler {
    client: Client;
    errorHandler: ErrorHandler;
    commandHandler: CommandHandler;
    constructor(client: Client, errorHandler:ErrorHandler, commandHandler: CommandHandler) {
        this.client = client;
        this.errorHandler = errorHandler;
        this.commandHandler = commandHandler;
    }
    async boot() {
        this.registerCommands();
        console.log(`${this.client.user?.tag} is ready`);
    }
    registerCommands() {
        this.commandHandler.registerCommands();
    }
}