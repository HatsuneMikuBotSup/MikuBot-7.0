export function ping(interaction: any, args: any) {
    const client = interaction.client;
    interaction.reply("🏓 pong!").then((x: any) => {
        x.edit(`🏓 pong! (Client ${interaction.createdTimestamp - Date.now()}ms | Websocket ${client.ws.ping}ms)`);
    }).catch((x: any) => {
        console.log(x);
    });
}