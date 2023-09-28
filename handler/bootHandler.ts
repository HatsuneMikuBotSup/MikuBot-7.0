import { Client } from "discord.js";
import { LoggerHandler } from "./loggerHandler";
import { CommandHandler } from "./commandHandler";

export class BootHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    commandHandler: CommandHandler;
    constructor(client: Client, loggerHandler:LoggerHandler, commandHandler: CommandHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
        this.commandHandler = commandHandler;
    }
    async boot() {
        this.loggerHandler.log("BootHandler", `Starting Boot Process`);
        this.registerCommands();
        this.loggerHandler.log("BootHandler", `${this.client.user?.tag} is ready`);
    }
    registerCommands() {
        this.commandHandler.registerCommands();
    }
}