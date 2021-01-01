import Sequelize, { INTEGER, STRING } from "sequelize";
import { ClubInterface } from "../objectRelationalMapping/model.interfaces";
import { SequelizeAttributes } from "../objectRelationalMapping/sequelize.attributes";
import { ClubAttributes } from "./attributes";

const ClubFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<ClubInterface> => {
  const attributes: SequelizeAttributes<ClubAttributes> = {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, 
    name: {
      type: STRING(30),
      allowNull: false,
    }, 
    total_budget: {
      type: INTEGER,
    },
    current_budget: {
      type: INTEGER,
    },
  };
  const Club = sequelize.define<ClubInterface, ClubAttributes>("club", attributes, {
    timestamps: false,
  });
  return Club;
}

export { ClubFactory }