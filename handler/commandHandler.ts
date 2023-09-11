import { Client, PermissionFlagsBits} from "discord.js";

const activeCommands = [
    {
        name: "ping",
        description: "Replies with pong",
        options: [],
        uri: "commands/ping.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.Administrator,
        cost : 0,
    }, {
        name: "test",
        description: "Replies with test",
        options: [],
        uri: "commands/ping.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.KickMembers,
        cost : 0,
    },
];

activeCommands.forEach((x) => {
    x.file = require("../" + x.uri);
});

export class CommandHandler {
    client: Client;
    errorHandler: any;
    constructor(client: Client, errorHandler: any) {
        this.client = client;
        this.errorHandler = errorHandler
    }
    async handle(interaction: any) {
        const commandInteraction: any = interaction.commandName;
        const activeCommand = activeCommands.find((x) => x.name === commandInteraction);
        if (!activeCommand || !activeCommand.file) return;
        const commandFunction: Function = activeCommand.file[commandInteraction];
        if (!commandFunction) return;
        const args = interaction.options;
        commandFunction(interaction, args, this.errorHandler);
    }
    registerCommands() {
        console.log("Registering commands");
        this.client.application?.commands.set(activeCommands);
    }
}


