export class BaseLogger {
    log(data) {
        console.log("Default Logger : " + data)

    }
}
export class ElasticBaseLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Elastik " + data)
    }
    
}
export class MongoBaseLogger extends BaseLogger{
    log(data) {
        console.log("Logged to Mongo " + data)
    }
}