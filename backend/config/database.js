const { Pool } = require('pg');
require('dotenv').config();

class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = new Pool({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    async query(text, params) {
        const client = await this.pool.connect();
        try {
            const res = await client.query(text, params);
            return res;
        } catch (err) {
            console.error(err);
            throw err;
        } finally {
            client.release();
        }
    }
}

const instance = new Database();
Object.freeze(instance);
module.exports = instance;
