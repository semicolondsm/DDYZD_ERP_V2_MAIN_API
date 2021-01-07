import axios, { AxiosResponse } from "axios";
import jwt from "jsonwebtoken";
import { HttpError } from "../../@types/httpError";
import { UserInfo } from "../dto/userInfo";

const DSM_AUTH_URL = "http://54.180.98.91:8090";

const issuanceAccessToken = async (user_id: number): Promise<string> => {
  return jwt.sign({
    user_id: user_id,
    type: "access",
  }, process.env.JWT_SECRET, {
    issuer: "ddyzd",
    expiresIn: "2h",
  });
}

const issuanceRefreshToken = async (user_id: number): Promise<string> => {
  return jwt.sign({
    user_id: user_id,
    type: "refresh",
  }, process.env.JWT_SECRET, {
    issuer: "ddyzd",
    expiresIn: "14d",
  });
}

const getUserInfo = async (token: string) => {
  try {
    const response: AxiosResponse<UserInfo> = await axios.get(`${DSM_AUTH_URL}/v1/info/basic`, {
      headers: {
        "access-token": token,
      }
    });
    return response.data;
  } catch(err) {
    throw new HttpError(err.response.status, err.response.data.message);
  }
}

export { issuanceAccessToken, issuanceRefreshToken, getUserInfo }