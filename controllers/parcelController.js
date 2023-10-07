import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
import { Op } from "sequelize";
dotenv.config();


export const getParcels = (req, res) => {
  Parcel.findAll({
    where: {
      status:"created" }
  })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((e) => {
      res.status(200).json(e);
    });
};
