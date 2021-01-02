import { BusinessLogic } from "../@types/BusinessLogic";

interface ErrorHandler {
  (myFunc: BusinessLogic): BusinessLogic;
}

const errorHandler: ErrorHandler = (myFunc) => {
  const handledFunc: BusinessLogic = async (req, res, next) => {
    try {
      await myFunc(req, res, next);
    } catch(err) {
      console.error(err);
      res.status(err.status || 500);
      res.json({
        msg: err.message,
      });
    }
  }
  return handledFunc;
}

export { errorHandler }