export default function doaflip(interaction: any, args: any, loggerHandler: any) {
    interaction.reply(Math.random() > 0.1 ? "ooooeeeeeEEEEoOOOOHhhh" : "🤮").catch((error: any) => {
        loggerHandler.error("doaflip", error);
    });
}