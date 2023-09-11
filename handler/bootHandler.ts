import { Client } from "discord.js";

export class BootHandler {
    client: Client;
    errorHandler: any;
    commandHandler: any;
    constructor(client: Client, errorHandler:any, commandHandler: any) {
        this.client = client;
        this.errorHandler = errorHandler;
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