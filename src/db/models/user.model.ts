import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { VendorItem } from "./item.model";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isVendor: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export { User };
