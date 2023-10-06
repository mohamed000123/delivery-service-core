import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
dotenv.config();

export const pickUp = (req, res) => {
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
