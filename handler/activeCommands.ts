import { ApplicationCommandOptionType, PermissionFlagsBits } from "discord-api-types/v9";
import { imageCommands } from "../commands/imageCommands";

var regularCommands = [
    {
        "name": "ping",
        "description": "Replies with pong",
        "options": [],
        "uri": "commands/ping.ts",
        "defaultMemberPermissions": PermissionFlagsBits.Administrator,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "renameall",
        "description": "Renames all users in the server to a given name",
        "options": [
            {
                "name": "name",
                "description": "The name to rename all users to",
                "type": ApplicationCommandOptionType.String,
                "required": true,
            },
        ],
        "uri": "commands/renameall.ts",
        "defaultMemberPermissions": PermissionFlagsBits.Administrator,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "doaflip",
        "description": "Does a flip",
        "options": [],
        "uri": "commands/doaflip.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "help",
        "description": "Shows this help message",
        "options": [],
        "uri": "commands/help.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "pipebomb",
        "description": ":D",
        "options": [
            {
                "name": "name",
                "description": "User to bomb",
                "type": ApplicationCommandOptionType.String,
                "required": true,
            },
        ],
        "uri": "commands/pipebomb.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "describe",
        "description": "describes a code function",
        "options": [
            {
                "name": "command",
                "description": "Command which to print the code of",
                "type": ApplicationCommandOptionType.String,
                "required": true,
            },
        ],
        "uri": "commands/describe.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "spam",
        "description": "spams things",
        "options": [
            {
                "name": "spamthis",
                "description": "String which to spam",
                "type": ApplicationCommandOptionType.String,
                "required": true,
            },
        ],
        "uri": "commands/spam.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": 0,
        "nsfw": false,
    }, {
        "name": "allguilds",
        "description": "allguilds",
        "options": [],
        "uri": "commands/allguilds.ts",
        "defaultMemberPermissions": PermissionFlagsBits.Administrator,
        "cost": 0,
        "nsfw": false,
    }
];

imageCommands.forEach((imageCommand) => {
    let data = {
        "name": imageCommand.command,
        "description": imageCommand.command + " someone",
        "options": [
            {
                "name": "name",
                "description": imageCommand.command + " this user",
                "type": ApplicationCommandOptionType.String,
                "required": false,
            },
        ],
        "uri": "commands/imageCommandsInteraction.ts",
        "defaultMemberPermissions": PermissionFlagsBits.SendMessages,
        "cost": imageCommand.cost,
        "nsfw": imageCommand.nsfw,
    }
    regularCommands.push(data);
});


export const activeCommands = regularCommands;
