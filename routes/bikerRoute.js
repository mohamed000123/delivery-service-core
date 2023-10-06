import express from "express";
import { pickUp } from "../controllers/bikerController.js";
const router = express.Router();
router.get("/pickup/parcel/:id", pickUp);


export default router;
