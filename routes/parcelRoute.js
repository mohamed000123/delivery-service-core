import express from "express";
import {
  getParcels,
  getUserParcels,
} from "../controllers/parcelController.js";
const router = express.Router();
router.get("/all-parcels", getParcels);
router.get("/all-parcels/user/:id", getUserParcels);


export default router;
