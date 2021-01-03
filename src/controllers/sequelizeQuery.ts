import { db } from "../models";
import { OptionInterface, SupplyInterface } from "../models/objectRelationalMapping/model.interfaces";

const insertSupplyDataQuery = (name: string,
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

export {
  insertSupplyDataQuery,
  insertOptionDataQuery,
}