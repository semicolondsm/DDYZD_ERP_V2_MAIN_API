import Sequelize from "sequelize";
import { ClubAttributes } from "../clubModel/attributes";

interface ClubInterface extends Sequelize.Model<ClubAttributes, ClubAttributes>, ClubAttributes {}

export {
  ClubInterface
}