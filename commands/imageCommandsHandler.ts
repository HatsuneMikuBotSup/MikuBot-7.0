import { randomMedia } from "../utility/mediaSelector";
import { LoggerHandler } from "../handler/loggerHandler";
import { imageCommands } from "./imageCommands";

const fileEndings = [
    ".jpg",
    ".jpeg",
    ".gif",
    ".png",
];

export function imageCommandHandler(command: string, name: string, loggerHandler: LoggerHandler) {
    const replies = imageCommands.find((x: { command: any; }) => x.command === command)?.reply;
    const path = randomMedia("./media/imageCommands/" + command + "/", fileEndings, loggerHandler);
    const reply = (replies ? [replies[Math.floor(Math.random() * replies.length)]] : "No Message found for: " + command) + (name ? " " + name : "");
    return { reply: reply, path: path }
}