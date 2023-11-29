import { Client } from "discord.js";
import { LoggerHandler } from "./loggerHandler";
import { CommandHandler } from "./commandHandler";
import { DatabaseHandler } from "./databaseHandler";

export class BootHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    commandHandler: CommandHandler;
    databaseHandler: DatabaseHandler;
    constructor(client: Client, loggerHandler: LoggerHandler, commandHandler: CommandHandler, databaseHandler: DatabaseHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
        this.commandHandler = commandHandler;
        this.databaseHandler = databaseHandler;
    }
    async boot() {
        this.loggerHandler.log("BootHandler", `---------------------------------------Starting Boot Process-------------------------------------`);
        
        await this.commandHandler.registerCommands();
        await this.databaseHandler.boot();

        this.loggerHandler.log("BootHandler", `${this.client.user?.tag} is ready`);

    }
}