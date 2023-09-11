//----------------------------------------------------------------- Setup Discord.js

const { Client, GatewayIntentBits, Partials, SlashCommandBuilder } = require("discord.js");
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

const {BootHandler} = require("./handler/bootHandler");
const {CommandHandler} = require("./handler/commandHandler");
const {EventHandler} = require("./handler/eventHandler");
const bootHandler = new BootHandler(client);
const commandHandler = new CommandHandler(client);
const eventHandler = new EventHandler(client);

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