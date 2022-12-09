class Cat {
    constructor(color, name, age ) {
        this.color = color;
        this.name = name;
        this.age = age;
    }
    getColor() {
        return `The color of the cat is ${this.color}`
    }
    getName() {
        return `The name of the cat is ${this.name}`
}
getAge() {
    return `The age of the cat is ${this.age}`
}
}
const joseCat = new Cat('brown', 'Gizmo' , 7)
const rodCat = new Cat('Red', 'Chimy' , 4)
//console.log(joseCat, rodCat);
//console.log(joseCat.getAge());
class Pirate {
    constructor(Ship, Maps, captainName, Crew ) {
        this.Ship = Ship;
        this.Maps = Maps;
        this.CaptainName = captainName;
        this.Crew = Crew;
    }
    getShip() {
        return this.Ship;
    }
    getMaps() {
        return this.Maps;
    }
    getCaptainName() {
        return this.CaptainName;
    }
    getCrew() {
        return this.Crew;
    }
}
/*const jackSparrow = new Pirate('Pearl', 3 , 'Jack Sparrow', 22)
console.log(jackSparrow.getShip());
const blackPearl = new Pirate('Voyager', 5, 'blackbeard', 35)
// let pirateNames1 = ['Rodger', 'Blackbeard', 'Brownbeard'];
// let pirateNames2 = ['Jollybeard', 'Ahoy', 'Crackers'];
// for (let i = 0; i < pirateNames1.length; i++) {
//     console.log(`The name is ${pirateNames1[i]} the ship name is ${jackSparrow.getShip()} the number of the crew members is ${jackSparrow.getCrew()}`)
// }
// for (let i = 0; i < pirateNames2.length; i++) {
//     console.log(`The name is ${pirateNames2[i]} the ship name is ${blackPearl.getShip()} the number of the crew members is ${blackPearl.getCrew()}`)
// }


const arr1 = [
    {
        name : 'pirateName1',
        age : 24
    },
    {
        name : 'piratename2',
        age : 27
    },
    {
        name : 'pirateName3',
        age : 30
    }

];

const arr2 = [
    {
        name : 'pirateName4',
        age : 34
    },
    {
        name : 'piratename5',
        age : 47
    },
    {
        name : 'pirateName6',
        age : 50
    }

];

for (let i = 0; i < arr1.length; i++) {
        console.log(`The name is ${arr1[i].name} the ship name is ${jackSparrow.getShip()} the number of the crew members is ${jackSparrow.getCrew()}`)
    }
    for (let i = 0; i < arr2.length; i++) {
        console.log(`The name is ${arr2[i].name} the ship name is ${blackPearl.getShip()} the number of the crew members is ${blackPearl.getCrew()}`)
    } */


    const pirate1 = new Pirate('Pearl', 3, 'Jack Sparrow', 22);
    const pirate2 = new Pirate('Voyager', 5, 'blackbeard', 35);
    const pirate3 = new Pirate('Roger', 8, 'brownbeard', 45);
    const pirate4 = new Pirate('PearlAgain', 6, 'JackSparrowAgain', 22);
    const pirate5 = new Pirate('VoyagerAgain', 9, 'blackbeardAgain', 15);
    const pirate6 = new Pirate('RogerAgain', 7, 'brownbeardAgain', 45);
    // console.log(jackSparrow.getShip());
    const jollyRoger = [pirate1, pirate2, pirate3];
    const blackPearl = [pirate4, pirate5, pirate6];
    for (let i = 0; i < jollyRoger.length; i++) {
        console.log(`The name is ${jollyRoger[i].getCaptainName()} the ship name is ${jollyRoger[i].getShip()} the number of the crew members is ${jollyRoger[i].getCrew()}`)
    }
    for (let i = 0; i < blackPearl.length; i++) {
        console.log(`The name is ${blackPearl[i].getCaptainName()} the ship name is ${blackPearl[i].getShip()} the number of the crew members is ${blackPearl[i].getCrew()}`)
    }













