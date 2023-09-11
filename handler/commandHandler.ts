import { Client } from "discord.js";

export class CommandHandler {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async handle(interaction: any) {
        if (!interaction.isCommand()) return;
    }    
}


