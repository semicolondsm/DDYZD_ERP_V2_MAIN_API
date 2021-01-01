import Sequelize from "sequelize";
import { 
  ClubInterface, 
  ClubTagInterface, 
  OptionInterface, 
  SupplyInterface, 
  TagInterface, 
  UserInterface } from "./model.interfaces";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Club: Sequelize.ModelCtor<ClubInterface>;
  Tag: Sequelize.ModelCtor<TagInterface>;
  ClubTag: Sequelize.ModelCtor<ClubTagInterface>;
  User: Sequelize.ModelCtor<UserInterface>;
  Supply: Sequelize.ModelCtor<SupplyInterface>;
  Option: Sequelize.ModelCtor<OptionInterface>;
}