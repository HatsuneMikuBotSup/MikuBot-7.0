export function spam(interaction: any, args: any, loggerHandler: any) {
    const spamThis = args[0]?.value;
    var out = "";
    while (out.length + spamThis.length < 2000) {
        out += spamThis;
    }
    interaction.reply(out).catch((x: any) => {
        loggerHandler.error(x);
    });
}