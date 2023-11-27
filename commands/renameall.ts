export default function renameall(interaction: any, args: any, loggerHandler: any) {
    const name = args[0].value;
    const guild = interaction.guild;
    console.log("Renaming all members to " + name);

    guild.members.fetch().then((members: any) => {
        members.forEach(async (x: any) => {
            if (x.user.id === guild.ownerId) return;
            if (x.nickname?.toLowerCase().includes(name.toLowerCase())) return;
            if (x.user.username.length + name.length > 32) {
                await x.setNickname(name).catch((error: any) => {
                    loggerHandler.error("renameall", error);
                });
                console.log("Renamed " + x.user.username);
            } else {
                await x.setNickname(x.user.username + name).catch((error: any) => {
                    loggerHandler.error("renameall", error);
                });
                console.log("Renamed " + x.user.username);
            }
        });
        interaction.reply(`Starting to Rename ${members.size} members to ${name}`).catch((error: any) => {
            loggerHandler.error("renameall", error);
        });
    }).catch((error: any) => {
        loggerHandler.error("renameall", error);
    });
}