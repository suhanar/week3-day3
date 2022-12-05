class Person{
    constructor(name,age=33,blood='a+'){
        this.name = name;
        this.age = age;
        this.blood = blood;
    }
    getName(name){
        return `The name is ${name}`
    }
    getAge(age){
        return `The age is ${age}`
    }
    getBlood(blood){
        return `The blood is ${blood}`
    }

}
class Postal extends Person{
    
    getName(name){
        return `dont kno ${name}`;
    }
    getSteal(){
        return `This is a steel one ${this.blood} and ${this.getAge(23)}`;
    }
}

const postal1 = new Postal();
console.log(postal1.getName('ssa'));
console.log(postal1.getSteal());