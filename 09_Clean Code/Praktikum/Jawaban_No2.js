class Car {
    constructor(carWheel, carSpeed){
     this.carWheel = carWheel;
     this.carSpeed = carSpeed;
    }
}

class newCar extends Car {
    constructor (addSpeed, carSpeed) {
        this.addSpeed = addSpeed(10);
    }
    addSpeed(newSpeed) {
        return this.carSpeed = carSpeed + newSpeed;
    }
}

let carFast = new newCar();
carFast.drive();

let carSlow = new newCar();
carSlow.drive();