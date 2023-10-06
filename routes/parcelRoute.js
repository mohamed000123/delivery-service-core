import express from "express";
import {
  createParcel,
  getParcels,
  pickedUp,
  getUserParcels,
} from "../controllers/parcelController.js";
const router = express.Router();
router.post("/create", createParcel);
router.get("/all-parcels", getParcels);
router.get("/all-parcels/user/:id", getUserParcels);
router.get("/picked-up/:id", pickedUp);

export default router;
