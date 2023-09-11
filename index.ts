//----------------------------------------------------------------- Setup Discord.js

import { Client, GatewayIntentBits, Partials, SlashCommandBuilder } from "discord.js";
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
import { ErrorHandler } from "./handler/errorHandler";
const errorHandler = new ErrorHandler(client);
const commandHandler = new CommandHandler(client, errorHandler);
const eventHandler = new EventHandler(client, errorHandler);
const bootHandler = new BootHandler(client, errorHandler, commandHandler);

//----------------------------------------------------------------- Setup Client.on

client.on("ready", (x: any) => {
    bootHandler.boot();
});

client.on("interactionCreate", async (interaction: any) => {
    if (!interaction.isChatInputCommand()) return;
    commandHandler.handle(interaction);
});

//----------------------------------------------------------------- Client login

client.login(process.env.TOKEN);