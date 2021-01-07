import axios, { AxiosResponse } from "axios";
import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { db } from "../models";
import { UserInterface } from "../models/objectRelationalMapping/model.interfaces";
import { UserInfo } from "./dto/userInfo";
import { getUserInfo, issuanceAccessToken, issuanceRefreshToken } from "./functions/userAuthentication";

const provideToken: BusinessLogic = async (req, res, next) => {
  const token: string = req.headers["access-token"] as string;
  if(!token) {
    throw new HttpError(400, "Bad Request");
  }
  const userInfo: UserInfo = await getUserInfo(token);
  const user: [UserInterface, boolean] = await db.User.findOrCreate({ 
    where: userInfo,
  });
  const accessToken: string = await issuanceAccessToken(user[0].id);
  const refreshToken: string = await issuanceRefreshToken(user[0].id);
  res.status(200).json({
    "access-token": accessToken,
    "refresh-token": refreshToken,
  });
}

const refreshToken: BusinessLogic = async (req, res, next) => {
  const accessToken: string = await issuanceAccessToken(req.rt_decoded.user_id);
  res.status(200).json({
    "access-token": accessToken,
  });
}

export { provideToken, refreshToken }