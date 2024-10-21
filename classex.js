class Mycars{
    constructor(car,engine,color){
        this.car = car;
        this.engine = engine;
        this.color = color;
    }
    startcar(){
        console.log(`${this.car} car started..`);
    }
    startengine(){
       console.log(`${this.engine} engine started...`);
    }
    displaycolor(){
        console.log(`${this.color} is mycar color ..`);
}
}
let mycars = new Mycars("BMW","5000cc","Blue");
mycars.startcar();
mycars.startengine();
mycars.displaycolor();