class Governor {
    constructor(name,stateName){
        this.name = name;
        this.stateName = stateName;
    }
    static getName(name){
        return `Name of the Governor is ${name.name}`;
    }
    static getState(state){
        return `State ${state.stateName}`;
    }
}

const firstInstance = new Governor('Raj','NC')
console.log(Governor.getState(firstInstance));
console.log(Governor.getName(firstInstance));

class Person{
    constructor(name,age,place){
         this.name = name;
         this.age = age;
         this.place = place;
    }
    getName(){
        return `${this.name}`;
    }
    getAge(){
        return `${this.age}`;
    }
    getPlace(){
        return `${this.place}`;
    }
}

class PostalWorker extends Person{
    constructor(name,age,place,county){
        super(name,age,place);
        this.county = county;
    }
    getDetails(){
        let arr = [];
        arr.push(super.getName(),super.getAge(),super.getPlace());
       return `The name of the person is ${arr[0]} his/her age is ${arr[1]} and the place is ${arr[2]}`;
    }
    getCounty(){
        return this.county;
    }
}
const postal1 = new PostalWorker('Mary',24,'NC','wake');
const postal2 = new PostalWorker('Clara',26,'NC','wake');
console.log(postal1.getDetails());

class Chef extends Person{
    constructor(name,age,place){
        super(name,age,place);
}
    getChefDetails(){
        return `The chef place is ${super.getPlace()}`;
    }
}
const chef1 = new Chef('Neil',12,'NY');
const chef2 = new Chef('John',14,'NJ');
console.log(chef1.getChefDetails());
console.log(chef2.getChefDetails());