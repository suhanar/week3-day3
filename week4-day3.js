//Write a for loop that will log the numbers 1 through 20.
for(let i =0;i<=20;i++){
    console.log(i)
}

//Write a for loop that will log only the even numbers in 0 through 200.
for(let i=0;i<=200;i++){
    if(i%2==0){
        console.log(i);
    }
    
}

//Fizz Buzz
for(let i=0;i<=20;i++){
    console.log((i%3==0&&i%5==0) ? "FizzBuzz" : (i%3==0)? "Fizz" : (i%5==0)? "Buzz" : i);
}