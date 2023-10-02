import { Client, Message } from "discord.js";
import { LoggerHandler } from "./loggerHandler";
import { randomMedia } from "../utility/mediaSelector";

export class MessageHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
    handle(message: Message) {
        console.log(message.guild?.name + ": " + message.author.tag + ": " + message.content);
        if (message.channel.type == 1) this.directMessage(message);
    }
    directMessage(message: Message) {
        const fileEndings = [".jpg", ".jpeg", ".gif", ".png"];
        const file = randomMedia("./media/cute/", fileEndings);
        const reply = "💙Hiiii💙\n" +
            "Invite me to your server OwO\n" +
            "https://discord.com/api/oauth2/authorize?client_id=782328525071056918&permissions=8&scope=bot";
        message.channel.send({ content: reply, files: file ? [file] : [] });
    }
}


