import { Client } from "discord.js";
import { ErrorHandler } from "./errorHandler";

export class EventHandler {
    client: Client;
    errorHandler: ErrorHandler;
    constructor(client: Client, errorHandler: ErrorHandler) {
        this.client = client;
        this.errorHandler = errorHandler;
    }
}


