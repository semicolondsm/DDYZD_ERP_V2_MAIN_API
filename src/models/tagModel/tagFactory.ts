import Sequelize, { INTEGER, STRING } from "sequelize";
import { TagInterface } from "../objectRelationalMapping/model.interfaces";
import { SequelizeAttributes } from "../objectRelationalMapping/sequelize.attributes";
import { TagAttributes } from "./attributes";

const TagFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<TagInterface> => {
  const attributes: SequelizeAttributes<TagAttributes> = {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    }, 
    title: {
      type: STRING(15),
      allowNull: false,
    }
  };
  const Tag = sequelize.define<TagInterface, TagAttributes>("tag", attributes, {
    timestamps: false,
    freezeTableName: true
  });
  return Tag;
}

export { TagFactory }