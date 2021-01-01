import Sequelize from "sequelize";
import { ClubInterface, ClubTagInterface, TagInterface } from "./model.interfaces";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Club: Sequelize.ModelCtor<ClubInterface>;
  Tag: Sequelize.ModelCtor<TagInterface>;
  ClubTag: Sequelize.ModelCtor<ClubTagInterface>;
}