import { ApplicationCommandOptionType, PermissionFlagsBits } from "discord-api-types/v9";

export const activeCommands = [
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
    }, {
        name: "hug",
        description: "huggy wuggy",
        options: [
            {
                name: "name",
                description: "User to hug",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
        uri: "commands/hug.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    }, {
        name: "doaflip",
        description: "Does a flip",
        options: [],
        uri: "commands/doaflip.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    },{
        name: "help",
        description: "Shows this help message",
        options: [],
        uri: "commands/help.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    }, {
        name: "pipebomb",
        description: ":D",
        options: [
            {
                name: "name",
                description: "User to bomb",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
        uri: "commands/pipebomb.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    }, {
        name: "fuck",
        description: "fucking",
        options: [
            {
                name: "name",
                description: "User to fuck",
                type: ApplicationCommandOptionType.String,
                required: false,
            },
        ],
        uri: "commands/fuck.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: true,
    }, {
        name: "describe",
        description: "fucking",
        options: [
            {
                name: "command",
                description: "Command which to print the code of",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
        uri: "commands/describe.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    }, {
        name: "spam",
        description: "spams things",
        options: [
            {
                name: "spamthis",
                description: "String which to spam",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
        uri: "commands/spam.ts",
        file: null,
        defaultMemberPermissions: PermissionFlagsBits.SendMessages,
        cost: 0,
        nsfw: false,
    },
];