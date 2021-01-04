import { db } from "../models";
import { ClubInterface, OptionInterface, SupplyInterface } from "../models/objectRelationalMapping/model.interfaces";

const insertSupplyDataQuery = (
  name: string,
  price: number,
  status: number,
  count: number,
  link: string,
  user_id: number,
  club_id: number)
  : Promise<SupplyInterface> => {
  return db.Supply.create({ name, price, status, count, link, user_id, club_id, });
}

const insertOptionDataQuery = (option: string, supply_id: number): Promise<OptionInterface> => {
  return db.Option.create({
    script: option,
    supply_id: supply_id
  });
}

const findSupplyByIdQuery = (supply_id: number): Promise<SupplyInterface> => {
  return db.Supply.findOne({
    where: { id: supply_id },
  });
}

const findClubByIdQuery = (club_id: number): Promise<ClubInterface> => {
  return db.Club.findOne({
    where: { id: club_id },
  });
}
 
export {
  insertSupplyDataQuery,
  insertOptionDataQuery,
  findSupplyByIdQuery,
  findClubByIdQuery,
}