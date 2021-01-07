import jwt from "jsonwebtoken";
import { BusinessLogic } from "../@types/BusinessLogic";
import { HttpError } from "../@types/httpError";
import { errorHandler } from "./errorHandler";

const verifyTokenLogic: BusinessLogic = (req, res, next) => {
  try {
    const token: string = req.headers["authorization"];
    if(!token) {
      throw new Error();
    } 
    const decoded = jwt.verify(token.slice(7), process.env.JWT_SECRET) as { type: string };
    if(decoded.type !== "access") {
      throw new Error();
    }
    req.decoded = decoded;
    next();
  } catch(err) {
    if(err.message === "TokenExpiredError") {
      throw new HttpError(401, "Expired token");
    } else {
      throw new HttpError(401, "Unauthorized token");
    }
  }
}

const verifyToken: BusinessLogic = errorHandler(verifyTokenLogic);

export { verifyToken }