import { createLogger, format, Logger, transports } from "winston";
  
const logger: Logger = createLogger({
  level: "info",
  format: format.json(),
  transports: [
    new transports.File({ filename: "combined.log" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
}); 

export { logger }