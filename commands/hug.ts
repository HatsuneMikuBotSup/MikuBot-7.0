export function hug(interaction: any, args: any, errorHandler: any) {
    const name = args[0]?.value;
    interaction.reply(`Hugging ${name ? name : "<@" + interaction.member.id + ">"} Beep beep boop`).catch((x: any) => {
        errorHandler.handle(x);
    });

}