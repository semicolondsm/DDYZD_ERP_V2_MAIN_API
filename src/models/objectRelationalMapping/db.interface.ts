import Sequelize from "sequelize";
import { ClubInterface } from "./model.interfaces";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Club: Sequelize.ModelCtor<ClubInterface>;
}