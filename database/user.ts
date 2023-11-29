import { Client } from "pg";

export interface User {
    id: number;
    credit: number;
    banned: boolean;
    created_at: Date;
    updated_at: Date;
}

export class UserHandler {
    database: Client;
    constructor(database: Client) {
        this.database = database;
    }
    async createUser(user: any) {
        return await this.database.query('INSERT INTO "user" (id, credits, banned, created_at, updated_at) VALUES ($1, 0, false, NOW(), NOW())', [user.id]);
    }
    async getUser(user: any) {
        const result = await this.database.query<User>("SELECT * FROM user WHERE id = $1", [user.id]);
        return result.rows[0];
    }
    async updateUserCredits(user: any, credits: number) {
        await this.database.query("UPDATE user SET credit = $1 WHERE id = $2", [credits, user.id]);
    }
    async updateUserBanned(user: any, banned: boolean) {
        await this.database.query("UPDATE user SET banned = $1 WHERE id = $2", [banned, user.id]);
    }
}
