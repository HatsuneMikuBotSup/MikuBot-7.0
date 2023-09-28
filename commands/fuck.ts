export function fuck(interaction: any, args: any, loggerHandler: any) {
    const name = args[0]?.value;
    interaction.reply(`Fucking ${name ? name : "<@" + interaction.member.id + ">"} :3`).catch((x: any) => {
        loggerHandler.error(x);
    });
}