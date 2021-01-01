import Sequelize, { INTEGER, STRING } from "sequelize";
import { OptionInterface } from "../objectRelationalMapping/model.interfaces";
import { SequelizeAttributes } from "../objectRelationalMapping/sequelize.attributes";
import { OptionAttributes } from "./attributes";

const OptionFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<OptionInterface> => {
  const attributes: SequelizeAttributes<OptionAttributes> = {
    id: {
      type: INTEGER, 
      primaryKey: true,
      autoIncrement: true,
    },
    script: {
      type: STRING(200),
      allowNull: false,
    },
  };
  const Option = sequelize.define<OptionInterface, OptionAttributes>("option", attributes, {
    timestamps: false,
    freezeTableName: true,
  });
  return Option;
}

export { OptionFactory }