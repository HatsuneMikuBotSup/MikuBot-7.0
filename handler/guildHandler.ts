import { Client, Guild } from "discord.js";
import { LoggerHandler } from "./loggerHandler";


export class GuildHandler {
    client: Client;
    loggerHandler: LoggerHandler;
    constructor(client: Client, loggerHandler: LoggerHandler) {
        this.client = client;
        this.loggerHandler = loggerHandler;
    }
    join(guild: Guild) {
        console.log("I joined a new server: " + guild.name);
        guild.systemChannel?.send("Thanks for inviting me OwO\nThis bot is currently in Beta\nJoin our discord for help or suggestions\nhttps://discord.gg/s9bqnpBNZh");
    }
}


