//----------------------------------------------------------------- Setup Discord.js

import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Channel],
});

//----------------------------------------------------------------- Setup Handlers

import { BootHandler } from "./handler/bootHandler";
import { CommandHandler } from "./handler/commandHandler";
import { EventHandler } from "./handler/eventHandler";
import { LoggerHandler } from "./handler/loggerHandler";
import { GuildHandler } from "./handler/guildHandler";
const loggerHandler = new LoggerHandler(client);
const commandHandler = new CommandHandler(client, loggerHandler);
const eventHandler = new EventHandler(client, loggerHandler);
const bootHandler = new BootHandler(client, loggerHandler, commandHandler);
const guildHandler = new GuildHandler(client, loggerHandler);

//----------------------------------------------------------------- Setup Client.on

client.on("ready", (x: any) => {
    bootHandler.boot();
});

client.on("interactionCreate", async (interaction: any) => {
    if (!interaction.isChatInputCommand()) return;
    commandHandler.handle(interaction);
});

client.on("guildCreate", async(guild) => {
    guildHandler.join(guild);
});


//----------------------------------------------------------------- Client login

client.login(process.env.TOKEN);