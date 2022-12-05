class vehicle {
    constructor(color,make,model){
        this.color1 = color;
        this.make1 = make;
        this.model1 = model;
    }
    getSpecs(){
        return `color ${this.color}`
    }
}

const jimtruck = new vehicle('Red','ford','ranger');
console.log(jimtruck);
const lisacar = new vehicle('Blue','Toyote','fortuner');
//console.log(lisacar);