import pool from "../config/db.js";

export const saveQrCodeService = async (url, number, expiryDate, createdAt) => {
    const result = await pool.query("INSERT INTO qrcode (url, number, expiry_date, created_at) VALUES ($1, $2, $3, $4) RETURNING *", [url, number, expiryDate, createdAt]);
    return result.rows[0];
}


export const getAllQrCodesService = async () => {
    const result = await pool.query("SELECT * FROM qrcode");
    return result.rows;
}

export const getQrCodeByNumberService = async (number) => {
    const result = await pool.query("SELECT * FROM qrcode WHERE number = $1", [number]);
    return result.rows[0];
}

