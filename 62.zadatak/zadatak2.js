//Napravi objekat TV
let TV = {
    brand:'LG',
    resolution:'1080',
    productionID:'32lcd123',
    screenSize:'32"',
    numberOfChannels:'120',
    hasRemote:true,
    isOn:false,
    volume:0,
    turnOn(){
        console.log('Tv is on');
        this.isOn = true;
    },
    turnOff(){
        console.log('Tv is off');
        this.isOn=false;
    },
    lostRemote(){
        this.hasRemote = false;
    },
    increaseVolume(){
        this.volume++;
    },
    decreaseVolume(){
        this.volume--;
    }
}