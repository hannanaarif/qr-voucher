import express from "express";
import { generatePdfController } from "../controller/pdfGenerationController.js";


const router = express.Router();


router.post("/generatePdf", generatePdfController);

export default router;