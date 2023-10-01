import { Client, Message } from "discord.js";
import { LoggerHandler } from "./loggerHandler";

export class MessageHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
    handle(message: Message) {
        if (message.channel.type.toString() !== "GUILD_TEXT") this.directMessage(message);
    }
    directMessage(message: Message) {
        message.channel.send(
            "💙Hiiii💙\n" +
            "Invite me to your server OwO\n" +
            "https://discord.com/api/oauth2/authorize?client_id=782328525071056918&permissions=8&scope=bot"
        );
    }
}


