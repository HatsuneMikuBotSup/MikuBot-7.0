import { Client } from "discord.js";

export class ErrorHandler {
    client: Client;
    constructor(client: Client,) {
        this.client = client;
    }
    async handle(error: any) {
        console.log(error);
    }
}


