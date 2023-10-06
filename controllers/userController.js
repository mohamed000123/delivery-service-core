import { Parcel } from "../models/parcel.js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

export const createParcel = (req, res) => {
  const { name, pickupAddress, deliveryAddress } = req.body;
  const userId = req.userId;
  const newParcel = {
    id: uuidv4(),
    name,
    pickupAddress,
    deliveryAddress,
    userId,
    status: "created",
  };
  Parcel.create(newParcel)
    .then(() => {
      res
        .status(200)
        .json({ message: "parcel created successfully", success: "true" });
    })
    .catch((e) => {
      console.log(e);
      let message = e.errors[0].message;
      res.status(400).json(message);
    });
};
