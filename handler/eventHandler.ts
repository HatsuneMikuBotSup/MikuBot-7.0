import { Client } from "discord.js";

export class EventHandler {
    client: Client;
    errorHandler: any;
    constructor(client: Client, errorHandler: any) {
        this.client = client;
        this.errorHandler = errorHandler;
    }
}


