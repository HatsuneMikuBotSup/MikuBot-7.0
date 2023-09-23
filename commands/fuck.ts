export function fuck(interaction: any, args: any, errorHandler: any) {
    const name = args[0]?.value;
    interaction.reply(`Fucking ${name ? name : "<@" + interaction.member.id + ">"} :3`).catch((x: any) => {
        errorHandler.handle(x);
    });
}