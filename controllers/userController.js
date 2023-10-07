import { Parcel } from "../models/parcel.js";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

export const createParcel = (req, res) => {
  if (req.type == "User") {
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
        res.status(500).json(e);
      });
  } else {
   res.status(500).json("wrong credentials");
  }
};

export const getUserParcels = (req, res) => {
  try {
    if (req.type == "User") {
      Parcel.findAll({
        where: {
          userId: req.userId,
        },
      })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((e) => {
          res.status(500).json(e);
        });
    } else {
      res.status(500).json("wrong credentials");
    }
  } catch (e) {
    console.log("error", e);
  }
};