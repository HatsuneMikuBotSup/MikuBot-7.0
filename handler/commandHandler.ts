import { Client } from "discord.js";

const activeCommands = [
    {
        name: "ping",
        description: "Replies with pong",
        options: [],
        uri: "commands/ping.ts",
        file: null,
    }, {
        name: "test",
        description: "Replies with test",
        options: [],
        uri: "commands/ping.ts",
        file: null,
    },
];

activeCommands.forEach((x) => {
    x.file = require("../" + x.uri);
});

export class CommandHandler {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }
    async handle(interaction: any) {
        const commandInteraction: any = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        const commandFunction: Function = activeCommand.file[commandInteraction];
        if (!commandFunction) return;
        const args = interaction.options;
        commandFunction(interaction, args);
    }
    registerCommands() {
        console.log("Registering commands");
        this.client.application?.commands.set(activeCommands);  
    }
}


