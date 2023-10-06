import { Parcel } from "../models/parcel.js";
import dotenv from "dotenv";
dotenv.config();

export const pickUp = (req, res) => {
  try {
    if (req.type == "Biker") {
      const bikerId = req.userId;
      Parcel.update(
        { status: "pickedUp", bikerId },
        {
          where: {
            id: req.params.id,
          },
        }
      )
        .then(() => {
          return res
            .status(200)
            .json(`parcel has been picked up successfully `);
        })
        .catch((e) => {
          return res.status(500).json(`something went wrong" ${e}`);
        });
    } else {
      return res.status(500).json(`wrong credentials`);
    }
  } catch (err) {
    console.log(err);
  }
};
