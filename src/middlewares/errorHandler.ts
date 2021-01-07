import { BusinessLogic } from "../@types/BusinessLogic";
import { logger } from "../loaders/logger";

interface ErrorHandler {
  (myFunc: BusinessLogic): BusinessLogic;
}

const errorHandler: ErrorHandler = (myFunc) => {
  const handledFunc: BusinessLogic = async (req, res, next) => {
    try {
      await myFunc(req, res, next);
    } catch(err) {
      logger.error(err.message);
      res.status(err.status || 500);
      res.json({
        msg: err.message,
      });
    }
  }
  return handledFunc;
}

export { errorHandler }