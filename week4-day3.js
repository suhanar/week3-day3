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

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));
//The sort() sorts the elements as strings in alphabetical and ascending order.
//console.log(favMovies.sort());
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
console.log(favMovies.reverse());
favMovies.shift();
//console.log(favMovies.shift()); 
//console.log(favMovies.unshift()); //18 it will give length of the modified array
//console.log(favMovies);
const django = favMovies.indexOf('Django Unchained');
favMovies.splice(django,1,"Avatar");
//console.log(favMovies);
const len = favMovies.length / 2;
const sliceArray = favMovies.slice(len);
//console.log(sliceArray);
//console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious" ));  // -1
//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

// we can add any number of element in a const array .it will not show error.