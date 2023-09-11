const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.DirectMessages,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildBans,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers
    ],
    partials: [Discord.Partials.Channel],
});

client.on("ready", () => {
    console.log("Bot is ready!");
});


client.login(process.env.TOKEN);