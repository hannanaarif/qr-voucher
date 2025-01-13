import express from "express";
import { QrCodeGeneratorController, getAllQrCodesController } from "../controller/QrCodeGeneratorController.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("existing vouchers");
});


router.post("/generateVoucher", QrCodeGeneratorController);
router.get("/getAllQrCodes", getAllQrCodesController);




export default router;