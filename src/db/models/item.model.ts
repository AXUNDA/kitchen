import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../sequelize";
import { User } from "./user.model";

const VendorItem = sequelize.define(
  "MenuItem",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // UserId: {
    //   type: DataTypes.UUID,
    //   allowNull: false,
    //   foreignKey: true,
    // },
  },
  {
    timestamps: true,
  },
);

export { VendorItem };
