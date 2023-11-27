import { activeCommands } from "../handler/activeCommands";

export default function help(interaction: any, args: any, loggerHandler: any) {
    interaction.reply({
        embeds: [{
            title: "Help",
            description: "Here is a list of all the commands you can use",
            fields: activeCommands.map((x) => {
                return {
                    name: x.name,
                    value: x.description
                }
            })
        }]
    }).catch((x: any) => {
        loggerHandler.error(x);
    });
}