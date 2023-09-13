export function renameall(interaction: any, args: any, errorHandler: any) {
    const name = args[0].value;
    const guild = interaction.guild;
    console.log("Renaming all members to " + name);

    guild.members.fetch().then((members: any) => {
        members.forEach(async (x: any) => {
            if (x.user.id === guild.ownerId) return;
            if (x.nickname?.toLowerCase().includes(name.toLowerCase())) return;
            if (x.user.username.length + name.length > 32) {
                await x.setNickname(name).catch((x: any) => {
                    errorHandler.handle(x);
                });
                console.log("Renamed " + x.user.username);
            } else {
                await x.setNickname(x.user.username + name).catch((x: any) => {
                    errorHandler.handle(x);
                });
                console.log("Renamed " + x.user.username);
            }
        });
        interaction.reply(`Starting to Rename ${members.size} members to ${name}`).catch((x: any) => {
            errorHandler.handle(x);
        });
    }).catch((x: any) => {
        errorHandler.handle(x);
    });
}