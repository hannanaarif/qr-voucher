import express from "express";


const router = express.Router();

router.post("/", settingController);

export default router;