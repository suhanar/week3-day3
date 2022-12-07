class Hamster{
    constructor(name='suhu'){
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log("squeek squeek");
    }
    eatFood(){
        console.log('nibble nibble');
    }
    getPrice(){
        return this.price;
    }
}
const hamster1 = new Hamster('rayu');
// console.log(hamster1.wheelRun());
// console.log(hamster1.eatFood());
// console.log(hamster1.getPrice());

class Person{
    constructor(name='suhu'){
        this.name = name;
        this.age  = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet(){
        console.log(`Hello ${this.name}`);
    }
    eat(){
        return `${this.weight++},${this.mood++}`;
        
        
    }
    exercise(){
        return this.weight--;
    }
    ageUp(){
        return(
            `${this.age++},${this.height++},${this.weight++},${this.mood--},${this.bankAccount += 10}`);
      

    }
    getPrice(){
        return this.bankAccount--;
    }
    buyHamster(hamster){
        //console.log(this.mood+=10);
        //console.log(this.getPrice());
        console.log(this.bankAccount);
        return (`${this.hamsters.push(hamster)},${this.mood+=10},${this.getPrice()-1}`);
       
        
    }
}

const Timmy = new Person();
Timmy.age = 5;
Timmy.weight = 5;
//Timmy.age = 9;

//console.log(Timmy.age);
console.log("Eat 5 times" +Timmy.eat());
console.log(Timmy.exercise());
console.log(Timmy.ageUp());
console.log(Timmy.buyHamster('hamster1'));
Timmy.hamsters.push('Gus');
console.log(Timmy.hamsters);

const Gus = new Hamster();
Gus.owner = 'Timmy';
Timmy.age = 15;
Timmy.weight *= 2;
//console.log(Timmy.exercise());
console.log(Timmy.exercise()*2);


class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
         
    }
    
}
class Chef extends Dinner{
    constructor(appetizer,entree,dessert){
      super(appetizer,entree,dessert);

      
    }
    getDinner(a1,a2,a3){
      return `Dinner is ${a1=this.appetizer},${a2=this.entree},${a3=this.dessert}`
    }

}

const dinner1 = new Chef('samosa','pasta','tiramisu');
const dinner2 = new Chef('calamari','Ravioli','cheesecake');
const dinner3 = new Chef('samosa chaat','biriyani','payasam');
console.log(dinner1.getDinner());
console.log(dinner2.getDinner());
console.log(dinner3.getDinner());