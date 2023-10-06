import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
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
      res.status(200).json({ message: "parcel created successfully", success: "true" });
    })
    .catch((e) => {
      console.log(e);
      let message = e.errors[0].message;
      res.status(400).json(message);
    });
};
export const getUserParcels = (req, res) => {
  const userId = req.params.id
  Parcel.findAll({
    where: {
      userId:userId,
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(200).json(e);
    });
};
export const getParcels = (req, res) => {
  Parcel.findAll({
    where: {
      status: { [Op.ne]: "pickedUp" },
    },
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(200).json(e);
    });
};
export const pickedUp = (req, res) => {
  const bikerId = "4f8565bc-55c9-4150-95d3-695e27641d0a";
  Parcel.update(
    { status: "pickedUp", bikerId },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      return res.status(200).json(`parcel has been picked up successfully `);
    })
    .catch((e) => {
      return res.status(500).json(`something went wrong" ${e}`);
    });
};
