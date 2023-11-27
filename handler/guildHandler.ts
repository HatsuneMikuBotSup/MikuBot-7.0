import { AttachmentBuilder, Client, Guild } from "discord.js";
import { LoggerHandler } from "./loggerHandler";
import { randomMedia } from "../utility/mediaSelector";


export class GuildHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
    join(guild: Guild) {
        this.loggerHandler.log("GuildHandlder", "Joined a new server: " + guild.name)
        const file = new AttachmentBuilder(randomMedia("./media/cute/", [".jpg", ".jpeg", ".gif", ".png"], this.loggerHandler));
        const reply = "Thanks for inviting me OwO\nThis bot is currently in Beta\nJoin our discord for help or suggestions\nhttps://discord.gg/s9bqnpBNZh";
        guild.systemChannel?.send({ content: reply, files: file ? [file] : [] });
    }
}

