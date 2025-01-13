import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import pdfRouter from "./routes/pdfRouter.js";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import createQrCodeTable from "./data/createQrCodeTable.js";
import createUserTable from "./data/createUserTable.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

createQrCodeTable();
createUserTable();

app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The current database is ${result.rows[0].current_database}`);
});

app.use("/users", userRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/pdf", pdfRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
