import { ExpressApplication } from "./loaders";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../.env") });

const server = new ExpressApplication();

server.init();
server.setPort(process.env.PORT || "3000");
server.listen();