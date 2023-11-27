import { AttachmentBuilder } from "discord.js";
import { imageCommandHandler } from "./imageCommandsHandler";

export default function imageCommandInteraction(interaction: any, args: any, loggerHandler: any) {
    const command = interaction.commandName;
    const name = args[0]?.value ? args[0]?.value : "<@" + interaction.member.id + ">";
    const cache = imageCommandHandler(command, name, loggerHandler);
    const file = new AttachmentBuilder(cache.path);
    const content = cache.reply;
    interaction.reply(file.attachment ? { content: content, files: [file] } : { content: content }).catch((error: any) => {
        loggerHandler.error("ImageCommandInteraction", error);
    });

}
