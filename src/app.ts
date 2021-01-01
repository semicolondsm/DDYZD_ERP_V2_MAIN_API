import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

const app: express.Application = express();

dotenv.config();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req: Request, res: Response, next: NextFunction) => {
  const allowOrigins: string[] = [process.env.ALLOW_ORIGINS1, process.env.ALLOW_ORIGINS2];
  const origin: string = req.headers.origin;
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
  res.status(404).send("Sorry, cant find that");
});