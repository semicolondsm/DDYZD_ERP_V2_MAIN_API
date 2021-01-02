import Sequelize, { INTEGER, STRING } from "sequelize";
import { SupplyInterface } from "../objectRelationalMapping/model.interfaces";
import { SequelizeAttributes } from "../objectRelationalMapping/sequelize.attributes";
import { SupplyAttributes } from "./attributes";

const SupplyFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<SupplyInterface> => {
  const attributes: SequelizeAttributes<SupplyAttributes> = {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(200),
      allowNull: false,
    },
    price: {
      type: INTEGER,
      allowNull: false,
    },
    status: {
      type: INTEGER, 
      allowNull: false,
    },
    message: {
      type: STRING(200),
    }, 
    count: {
      type: INTEGER, 
      allowNull: false,
    },
    link: {
      type: STRING(300),
      allowNull: false,
    },
    invoice: {
      type: STRING(100),
    }
  };
  const Supply = sequelize.define<SupplyInterface, SupplyAttributes>("supply", attributes, {
    timestamps: false,
    freezeTableName: true,
  });
  return Supply;
}

export { SupplyFactory }