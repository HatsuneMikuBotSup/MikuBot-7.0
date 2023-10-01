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
        const currentTimestamp = Date.now();
        const date = new Date(currentTimestamp);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        console.log(formattedDate + " [" + flag + "] " + message);
    }
}


