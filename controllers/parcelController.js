import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
dotenv.config();


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

