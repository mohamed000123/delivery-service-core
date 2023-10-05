import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
dotenv.config();

export const createParcel = (req, res) => {
  const { pickupAddress, deliveryAddress } = req.body;
  const userId = "0f0a1bab-9de9-4ad3-b940-85810f80f65f";
  const newParcel = {
    id: uuidv4(),
    pickupAddress,
    deliveryAddress,
    userId,
    status:"created"
  };
  Parcel.create(newParcel)
    .then(() => {
      res.status(200).json("parcel created successfully");
    })
    .catch((e) => {
      let message = e.errors[0].message;
      res.status(400).json(message);
    });
};
export const updateStatus = (req, res) => {
    
};
