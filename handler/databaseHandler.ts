import { UserHandler } from "../database/user";
import { LoggerHandler } from "./loggerHandler";
import { Client } from "pg"

export class DatabaseHandler {
    loggerHandler: LoggerHandler;
    database = new Client({
        host: "localhost",
        user: "postgres",
        port: 5432,
        password: process.env.DATABASE,
        database: "MikuBot7.0"
    })
    userHandler = new UserHandler(this.database);
    constructor(loggerHandler: LoggerHandler) {
        this.loggerHandler = loggerHandler;
    }
    async boot() {
        return await this.database.connect().then(this.loggerHandler.log("DatabaseHandler", "Connected to database"));
    }
}
//make postgress connection with pg dependency
