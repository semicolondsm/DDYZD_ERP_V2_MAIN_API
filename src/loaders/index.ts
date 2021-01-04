import express from "express";
import { connectDatabase } from "./database";
import { loadExpressMiddleware } from "./express";

class ExpressApplication {
  private app: express.Application;
  private port: number | string;
  private connectDatabase = connectDatabase;
  private loadExpressMiddleware = loadExpressMiddleware;
  public init() {
    this.connectDatabase();
    this.loadExpressMiddleware(this.app);
  }
  public setPort(port: number | string) {
    this.port = port;
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log("server on ", this.port);
    });
  }
  constructor() {
    this.app = express();
  }
}

export { ExpressApplication }