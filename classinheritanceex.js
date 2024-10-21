class vehicle{
    constructor(make, model1){
        this.make = make;
        this.model1 = model1;
    }
    displayinfo(){
        console.log(`make ${this.make}, model1 ${this.model1}`);
    }
}
class car extends vehicle{
    constructor(make,model1,doors){
        super(make, model1);
        this.doors = doors;
    }
    displaycarinfo(){
        this.displayinfo();
        console.log(`Number of doors....${this.doors}`);
    }
}
const mycar = new car("Mahendra....","thor Rox....",5);
mycar.displaycarinfo();