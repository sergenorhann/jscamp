import { BaseLogger } from "./baseLogger.js";

export class ElasticBaseLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Elastik " + data)
    }
}