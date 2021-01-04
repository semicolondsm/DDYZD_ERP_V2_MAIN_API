import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { ClubInterface, SupplyInterface } from "../models/objectRelationalMapping/model.interfaces";
import * as Query from "./sequelizeQuery";

const supplyClubItems: BusinessLogic = async (req, res, next) => {
  const { price, name, count, option, url } = req.body as { price: number, name: string, count: number, option: string, url: string };
  const club_id: number = Number(req.params.club_id);
  const majorClub: ClubInterface = await Query.FindClubById(club_id);
  if(majorClub.current_budget - price < 0) {
    throw new HttpError(400, "예산 초과");
  }
  const supply: SupplyInterface = await Query.InsertSupplyData(
    name, price, 2, count, url, req.decoded.user_id, club_id,
  );
  Query.InsertOptionData(option, supply.id);
  res.status(200).json({
    msg: "success",
  });
}

const putClubItems: BusinessLogic = async (req, res, next) => {
  const club_id: number = Number(req.params.club_id);
  const supply_id: number = Number(req.params.supply_id);
  const { count, price } = req.body as { count: number, price: number };
  const supply: SupplyInterface = await Query.FindSupplyById(supply_id);
  if(supply.club_id !== club_id || supply.user_id !== req.decoded.user_id) {
    throw new HttpError(403, "접근 권한이 없습니다.");
  }
  const majorClub = await Query.FindClubById(club_id);
  if(majorClub.current_budget - price < 0) {
    throw new HttpError(400, "예산 초과");
  }
  supply.count = count;
  supply.price = price;
  res.status(200).json({
    msg: "success",
  });
  supply.save();
}

export { 
  supplyClubItems,
  putClubItems,
}