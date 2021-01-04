import Sequelize from "sequelize";
import * as SequelizeInterface from "./model.interfaces";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Club: Sequelize.ModelCtor<SequelizeInterface.ClubInterface>;
  Tag: Sequelize.ModelCtor<SequelizeInterface.TagInterface>;
  ClubTag: Sequelize.ModelCtor<SequelizeInterface.ClubTagInterface>;
  User: Sequelize.ModelCtor<SequelizeInterface.UserInterface>;
  Supply: Sequelize.ModelCtor<SequelizeInterface.SupplyInterface>;
  Option: Sequelize.ModelCtor<SequelizeInterface.OptionInterface>;
}