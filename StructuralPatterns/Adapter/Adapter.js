class OldLogger{
    log(log){
        console.log('Old Logger:',log);
    }
}

class NewLogger{
    logger(type,log){
        console.log(`${type.toUpperCase()}: ${log}`);
    }
}

class AdapterLogger{
    constructor(newLogger){
        this.logger = newLogger;
    }

    log(log){
        this.logger.logger('info',log)
    }
}

function loggerHandler(logger){
   logger.log('User logged in')
}

const OL = new OldLogger();
const NL = new AdapterLogger(new NewLogger);

loggerHandler(OL);
loggerHandler(NL)