import jwt from "jsonwebtoken";
import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { errorHandler } from "./errorHandler";

const verifyRefreshTokenLogic: BusinessLogic = (req, res, next) => {
  try {
    const refreshToken: string = req.headers["refresh-token"] as string;
    if(!refreshToken) {
      throw new Error();
    } 
    const rt_decoded = jwt.verify(refreshToken.slice(7), process.env.JWT_SECRET) as { type: string };
    if(rt_decoded.type !== "refresh") {
      throw new Error();
    }
    req.rt_decoded = rt_decoded;
    next();
  } catch(err) {
    if(err.message === "TokenExpiredError") {
      throw new HttpError(401, "Expired token");
    } else {
      throw new HttpError(401, "Unauthorized token");
    }
  }
}

const verifyRefreshToken: BusinessLogic = errorHandler(verifyRefreshTokenLogic);

export { verifyRefreshToken }