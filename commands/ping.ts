export function ping(interaction: any, args: any, errorHandler: any) {
    const client = interaction.client;
    interaction.reply("🏓 pong!").then((x: any) => {
        x.edit(`🏓 pong! (Client ${Math.abs(interaction.createdTimestamp - Date.now())}ms | Websocket ${client.ws.ping}ms)`);
    }).catch((x: any) => {
        errorHandler.handle(x);
    });
}