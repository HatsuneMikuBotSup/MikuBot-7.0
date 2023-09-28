import { Client } from "discord.js";

export class LoggerHandler {
    client: Client;
    constructor(client: Client,) {
        this.client = client;
    }
    async error(error: any) {
        console.error(error);
    }
    async warn(message: any) {
        console.log(message);
    }
    async log(flag: any, message: any) {
        console.log("[" + flag + "] " + message);
    }
}


