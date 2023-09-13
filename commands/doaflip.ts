export function doaflip(interaction: any, args: any, errorHandler: any) {
    interaction.reply(Math.random() > 0.1 ? "ooooeeeeeEEEEoOOOOHhhh": "🤮").catch((x: any) => {
        errorHandler.handle(x);
    });

}