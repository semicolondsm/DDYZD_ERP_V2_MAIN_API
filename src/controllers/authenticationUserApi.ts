import axios, { AxiosResponse } from "axios";
import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { db } from "../models";
import { UserInterface } from "../models/objectRelationalMapping/model.interfaces";
import { issuanceAccessToken, issuanceRefreshToken } from "./functions/issuanceToken";

const DSM_AUTH_URL = "http://54.180.98.91:8090";

interface UserInfo {
  name: string;
  email: string;
  gcn: string;
}

const provideToken: BusinessLogic = async (req, res, next) => {
  const token: string = req.headers["access-token"] as string;
  if(!token) {
    throw new HttpError(400, "Bad Request");
  }
  const response: AxiosResponse<UserInfo> = await axios.get(`${DSM_AUTH_URL}/v1/info/basic`, {
    headers: {
      "access-token": `Bearer ${token}`,
    }
  });
  const user: [UserInterface, boolean] = await db.User.findOrCreate({ 
    where: response.data,
  });
  const accessToken: string = await issuanceAccessToken(user[0].id);
  const refreshToken: string = await issuanceRefreshToken(user[0].id);
  res.status(200).json({
    "access-token": accessToken,
    "refresh-token": refreshToken,
  });
}

export { provideToken }