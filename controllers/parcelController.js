import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
dotenv.config();

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
