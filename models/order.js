import { sequelize } from "../models/dbConnection.js";
import { Sequelize } from "sequelize";

export const Order = sequelize.define(
  "order",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    pickupDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    deliveryDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

Order.sync();
