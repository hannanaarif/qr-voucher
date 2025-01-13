import pool from "../config/db.js";

const createUserTable = async () => {
    const poolQuery = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`;
    try {
        pool.query(poolQuery);
        console.log("Table created successfully");
    } catch (error) {
        console.log("Error creating table", error);
    }
};

export default createUserTable;
