import pool from "../config/db.js";

const createQrCodeTable = async () => {
    const poolQuery = `CREATE TABLE IF NOT EXISTS qrcode (id SERIAL PRIMARY KEY, url TEXT NOT NULL, number VARCHAR(10) NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, expiry_date TIMESTAMP);`;

    try {
        pool.query(poolQuery);
        console.log("Table created successfully");
    } catch (error) {
        console.log("Error creating table", error);
    }
};


export default createQrCodeTable;