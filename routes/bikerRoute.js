import express from "express";
import {
  pickUp,
  bikerParcels,
  deliver,
} from "../controllers/bikerController.js";
const router = express.Router();
router.get("/pickup/parcel/:id", pickUp);
router.get("/deliver/parcel/:id", deliver);
router.get("/biker-parcels", bikerParcels);


export default router;
