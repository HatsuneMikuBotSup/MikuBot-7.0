import { Client } from "discord.js";

export class LoggerHandler {
    client: Client;
    constructor(client: Client,) {
        this.client = client;
    }
    async handle(error: any) {
        console.log(error);
    }
}


