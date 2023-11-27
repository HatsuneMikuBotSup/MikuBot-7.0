import { Guild, TextChannel, Invite, GuildChannel } from "discord.js";

export default async function allguilds(interaction: any, args: any, loggerHandler: any, activeCommands: any, client: any) {
    try {
        var allInvites: string[] = []; // Store the invite links in an array

        await Promise.all(client.guilds.cache.map(async (guild: Guild) => {
            if (guild.available) {

                try {
                    const channel = guild.channels.cache.find((ch) => ch instanceof TextChannel) as GuildChannel;
                    if (channel) {
                        const invite = await channel.createInvite({ maxAge: 0, maxUses: 1 });
                        loggerHandler.log("allguilds", "Invite created for: " + guild.name + " members: " + guild.memberCount + " url: " + invite.url);
                        allInvites.push(invite.url);
                    } else {
                        loggerHandler.log("allguilds", `No valid text channel found in ${guild.name}`);
                    }
                } catch (error) {
                    loggerHandler.error("allguilds", `Error creating invite for ${guild.name}: ${error}`)
                }
            }
        }));

        // Send the reply with all the invites
        interaction.reply(allInvites.join("\n"));
    } catch (error) {
        loggerHandler.error("allguilds", `Error processing guilds: ${error}`)
        interaction.reply("An error occurred while fetching guild information.");
    }
}
