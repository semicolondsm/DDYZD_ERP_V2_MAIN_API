import Sequelize from "sequelize";
import { ClubAttributes } from "../clubModel/attributes";
import { TagAttributes } from "../tagModel/attributes";

interface ClubInterface extends Sequelize.Model<ClubAttributes, ClubAttributes>, ClubAttributes {}
interface TagInterface extends Sequelize.Model<TagAttributes, TagAttributes>, TagAttributes {}

export {
  ClubInterface, 
  TagInterface
}