import { ActionRowBuilder, ButtonBuilder } from "@discordjs/builders";
import { ButtonStyle } from "discord.js";

export default function pipebomb(interaction: any, args: any, loggerHandler: any) {
    const name = args[0]?.value;
    const confirm = new ButtonBuilder().setCustomId("confirm").setLabel("Accept").setStyle(ButtonStyle.Success);
    const cancel = new ButtonBuilder().setCustomId("cancel").setLabel("Throw Away").setStyle(ButtonStyle.Danger);
    const row = new ActionRowBuilder().addComponents(confirm, cancel);

    interaction.reply({
        content: ` Yout got Mail ${name} :DDDD`,
        components: [row]
    }).catch((x: any) => {
        loggerHandler.error(x);
    });
}