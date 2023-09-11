import { Client } from "discord.js";

export class BootHandler {
    client: Client;
    commandHandler: any;
    constructor(client: Client, commandHandler: any) {
        this.client = client;
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