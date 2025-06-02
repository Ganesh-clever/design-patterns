class Tv{
    turnOn(){}
    turnOff(){}
    setChannel(channel){}
}

class SonyTv extends Tv{
    turnOn(){
        console.log('Sony tv turn on.');
    }

    turnOff(){
        console.log('Sony tv turn off.');
    }

    setChannel(channel){
        console.log(`Sony tv channel is ${channel}`);
    }
}

class LGTv extends Tv{
    turnOn(){
        console.log('LG tv turn on.');
    }

    turnOff(){
        console.log('LG tv turn off.');
    }

    setChannel(channel){
        console.log(`LG tv channel is ${channel}`);
    }
}

class RemoteController{
    constructor(tv){
      this.tv = tv
    }

    turnOn(){
        this.tv.turnOn();
    }

    turnOff(){
        this.tv.turnOff()
    }

    setChannel(channel){
        this.tv.setChannel(channel);
    }
}

class AdvanceRemote extends RemoteController{
    mute(){
        console.log('Tv volume is mute now');
    }
}

const sony = new SonyTv();
const lg = new LGTv();

const basicRemote = new RemoteController(sony);
const advanceRemote = new AdvanceRemote(lg);

basicRemote.turnOn();
basicRemote.turnOff();
basicRemote.setChannel(4);

advanceRemote.turnOn();
advanceRemote.turnOff();
advanceRemote.setChannel(4);
advanceRemote.mute();