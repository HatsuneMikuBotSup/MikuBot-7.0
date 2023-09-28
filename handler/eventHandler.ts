import { Client } from "discord.js";
import { LoggerHandler } from "./loggerHandler";

export class EventHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
}


