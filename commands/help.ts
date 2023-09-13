import { activeCommands } from "../handler/activeCommands";

export function help(interaction: any, args: any, errorHandler: any) {
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
        errorHandler.handle(x);
    });
}