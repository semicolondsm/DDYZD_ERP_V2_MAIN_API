import { ExpressApplication } from "./loaders";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../.env") });

const app = new ExpressApplication();

app.init();
app.setPort(process.env.PORT || "3000");
app.listen();