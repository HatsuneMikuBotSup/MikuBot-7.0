import { Client } from "discord.js";

export class BootHandler {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async boot() {
        console.log(`${this.client.user?.tag} is ready`);
    }
}