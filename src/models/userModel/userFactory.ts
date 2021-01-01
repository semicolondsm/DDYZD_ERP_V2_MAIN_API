import Sequelize, { INTEGER, STRING } from "sequelize";
import { UserInterface } from "../objectRelationalMapping/model.interfaces";
import { SequelizeAttributes } from "../objectRelationalMapping/sequelize.attributes";
import { UserAttributes } from "./attributes";

const UserFactory = (sequelize: Sequelize.Sequelize): Sequelize.ModelCtor<UserInterface> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    name: {
      type: STRING(20),
      allowNull: false,
    },
    gcn: {
      type: STRING(10),
      allowNull: false,
    }, 
    email: {
      type: STRING(50),
      allowNull: false,
    },
  };
  const User = sequelize.define<UserInterface, UserAttributes>("user", attributes, {
    timestamps: false,
    freezeTableName: true,
  });
  return User;
}

export { UserFactory }