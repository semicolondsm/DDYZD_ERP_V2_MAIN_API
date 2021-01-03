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
    req.decoded = jwt.verify(token, process.env.JWT_SECRET);
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