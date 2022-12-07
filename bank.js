class BankAccount{
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
        this.amt;
    }
    deposit(){
       return "Deposit is 10000";
    }
    withdraw(){
       this.amt = this.balance - 500;
       return this.amt;
    }
}
class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, acctNum,overdraftEnabled){
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(){
       this.amt = this.balance + this.overdraftEnabled;
       return `Your Overdrafted amount is  ${this.amt}`;
    }
}

const check = new CheckingAccount('suhu',1000,2121,5000);
console.log(check.withdraw());


class SavingsAccount extends BankAccount{
    constructor(ownerName, balance, acctNum){
        super(ownerName, balance, acctNum);
        
    }
     withdraw(){
        this.amt = this.balance;
       return `Current Saving account amount is ${this.amt}`;
     }
}
const save = new SavingsAccount('Raj',2000,111);
console.log(save.withdraw());