import express from "express";
import { pickUp, bikerParcels } from "../controllers/bikerController.js";
const router = express.Router();
router.get("/pickup/parcel/:id", pickUp);
router.get("/biker-parcels", bikerParcels);


export default router;
