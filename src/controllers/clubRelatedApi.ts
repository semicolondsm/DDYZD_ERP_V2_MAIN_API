import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { db } from "../models";
import { ClubInterface, SupplyInterface } from "../models/objectRelationalMapping/model.interfaces";
import { insertOptionDataQuery, insertSupplyDataQuery } from "./sequelizeQuery";

const supplyClubItems: BusinessLogic = async (req, res, next) => {
  const { price, name, count, option, url } = req.body;
  const club_id: number = Number(req.params.club_id);
  const majorClub: ClubInterface = await db.Club.findOne({
    where: { id: club_id }
  });
  if(majorClub.current_budget - price < 0) {
    throw new HttpError(400, "예산 초과");
  }
  const supply: SupplyInterface = await insertSupplyDataQuery(
    name, price, 2, count, url, req.decoded.user_id, club_id,
  );
  insertOptionDataQuery(option, supply.id);
  res.status(200).json({
    msg: "success",
  });
}

export { 
  supplyClubItems,
}