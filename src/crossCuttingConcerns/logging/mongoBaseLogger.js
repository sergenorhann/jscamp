import { BaseLogger } from "./baseLogger.js";

export class MongoBaseLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Mongo " + data)
    }
}