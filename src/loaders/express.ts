import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import cors from "cors";
import router from "../routes";
import { logger } from "./logger";

const loadExpressMiddleware = (app: express.Application) => {
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  if(process.env.NODE_ENV === "production") {
    app.use(helmet());
    app.use(hpp());
  }
  app.use((req: Request, res: Response, next: NextFunction) => {
    const allowOrigins: string[] = [process.env.ALLOW_ORIGINS1, process.env.ALLOW_ORIGINS2];
    const origin: string = req.headers.origin;
    logger.info(`${req.method} ${req.url} ${origin}`)
    if(allowOrigins.includes(origin)) {
      return cors({
        origin,
        credentials: true,
      })(req, res, next);
    } else {
      next();
    }
  });
  
  app.use("/", router);
  
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.error(`NotFoundException ${req.method} ${req.url}`)
    res.status(404).send("Sorry, cant find that");
  });
}

export { loadExpressMiddleware }