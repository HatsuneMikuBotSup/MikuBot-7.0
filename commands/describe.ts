export function describe(interaction: any, args: any, loggerHandler: any, activeCommands: any) {
    const name = args[0]?.value;
    const func = activeCommands.find((x: { name: any; }) => x.name === name);
    interaction.reply(func ? "```ts\n" + func.file[name].toString().replace(/`/g, '´') + "```" : "No such command found").catch((x: any) => {
        loggerHandler.error(x);
    });
}

