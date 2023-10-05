import express from "express";
import {
  createParcel,
  updateStatus,
} from "../controllers/parcelController.js";
const router = express.Router();
router.post("/create", createParcel);
router.get("/update-status", updateStatus);

export default router;
