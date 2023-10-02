import { Client } from "discord.js";
import winston from "winston";

export class LoggerHandler {
    client: Client;
    logger: winston.Logger;
    constructor(client: Client,) {
        this.client = client;

        this.logger = winston.createLogger({
            level: 'info', // Set your desired log level
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({ timestamp, level, message }) => {
                    return `${timestamp} [${level}] ${message}`;
                })
            ),
            transports: [
                new winston.transports.Console(), // Output logs to the console
                new winston.transports.File({ filename: 'error.log', level: 'error' }), // Output error logs to a file
                new winston.transports.File({ filename: 'combined.log' }) // Output combined logs (info and warnings) to a file
            ],
        });
    }
    async error(flag: any, error: any) {
        this.logger.error(error);
    }
    async warn(flag: any, message: any) {
        this.logger.warn(`[${flag}] ${message}`);
    }
    async log(flag: any, message: any) {
        const currentTimestamp = Date.now();
        const date = new Date(currentTimestamp);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        this.logger.info(`[${flag}] ${message}`);
    }
}


