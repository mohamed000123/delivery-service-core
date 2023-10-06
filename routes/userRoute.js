import express from "express";
import { createParcel } from "../controllers/userController.js";
const router = express.Router();
router.post("/create-parcel", createParcel);

export default router;
