import Sequelize from "sequelize";
import { ClubAttributes } from "../clubModel/attributes";
import { ClubTagAttributes } from "../clubTagModel/attributes";
import { TagAttributes } from "../tagModel/attributes";
import { UserAttributes } from "../userModel/attributes";

interface ClubInterface extends Sequelize.Model<ClubAttributes, ClubAttributes>, ClubAttributes {}
interface TagInterface extends Sequelize.Model<TagAttributes, TagAttributes>, TagAttributes {}
interface ClubTagInterface extends Sequelize.Model<ClubTagAttributes, ClubTagAttributes>, ClubTagAttributes {} 
interface UserInterface extends Sequelize.Model<UserAttributes, UserAttributes>, UserAttributes {}

export {
  ClubInterface, 
  TagInterface,
  ClubTagInterface,
  UserInterface
}