import pool from "../config/db.js";

export const getUserByEmailService = async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
}

export const createUserService = async (email, password) => {
    const result = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, password]);
    console.log("User created successfully", result.rows[0]);
    return result.rows[0];
}

export const loginUserService = async (email, password) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    return result.rows[0];
}