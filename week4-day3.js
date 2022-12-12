//Write a for loop that will log the numbers 1 through 20.
for(let i =0;i<=20;i++){
   // console.log(i)
}

//Write a for loop that will log only the even numbers in 0 through 200.
for(let i=0;i<=200;i++){
    if(i%2==0){
        //console.log(i);
    }
    
}

//Fizz Buzz
for(let i=0;i<=20;i++){
    //console.log((i%3==0&&i%5==0) ? "FizzBuzz" : (i%3==0)? "Fizz" : (i%5==0)? "Buzz" : i);
}

//Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;

wolfy[3]='Gotham City';
//console.log(wolfy);
const arr=[dart[3]];
arr.push('Hawkins');
dart[3]=arr;
//console.log(dart);
wolfy.shift();
wolfy.unshift('GameBoy');
//console.log(wolfy);


//Yell at the Ninja Turtles
const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

for(let i of ninja){
    console.log(i.toUpperCase());
}