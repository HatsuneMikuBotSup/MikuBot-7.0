import { ApplicationCommandOptionType, Client, PermissionFlagsBits } from "discord.js";
import { ErrorHandler } from "./errorHandler";

const activeCommands = [
    {
        name: "ping",
        description: "Replies with pong",
        options: [],
        uri: "commands/ping.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        cost: 0,
        nsfw: false,
    }, {
        name: "renameall",
        description: "Renames all users in the server to a given name",
        options: [
            {
                name: "name",
                description: "The name to rename all users to",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
        uri: "commands/renameall.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        cost: 0,
        nsfw: false,
    },
];

activeCommands.forEach((x) => {
    x.file = require("../" + x.uri);
});

export class CommandHandler {
    client: Client;
    errorHandler: ErrorHandler;
    constructor(client: Client, errorHandler: ErrorHandler) {
        this.client = client;
        this.errorHandler = errorHandler
    }
    async handle(interaction: any) {
        const commandInteraction: any = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        const commandFunction: Function = activeCommand.file[commandInteraction];
        if (!commandFunction) return;
        const args = interaction.options.data;
        commandFunction(interaction, args, this.errorHandler);
    }
    registerCommands() {
        console.log("Registering commands");
        this.client.application?.commands.set(activeCommands);
    }
}


