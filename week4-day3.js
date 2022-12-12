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
   // console.log(i.toUpperCase());
}

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//console.log(favMovies.indexOf('Titanic'));
//The sort() sorts the elements as strings in alphabetical and ascending order.
//console.log(favMovies.sort());
favMovies.pop();
favMovies.push('Guardians of the Galaxy');
//console.log(favMovies.reverse());
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
//console.log(favMovies.indexOf("Fast and Furious" ));  // -1
//Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

// we can add any number of element in a const array .it will not show error.

//Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];




//console.log(whereIsWaldo.slice(1,2));//no mutation
console.log(whereIsWaldo.splice(1,1));// mutation happened
//console.log(whereIsWaldo);
//whereIsWaldo[1][2]='No one';


//console.log(whereIsWaldo);
//console.log(whereIsWaldo[2][1][1]);
for(let i=0;i<whereIsWaldo.length;i++){
    for(let j=0;j<whereIsWaldo[i].length;j++){
        if(whereIsWaldo[i][j].indexOf('Neff')!== -1){
            whereIsWaldo[i][j] = 'No One'
        }
        
    }

}


console.log(whereIsWaldo);

//Excited Kitten
let i=0;
while(i<20){
    if(i%2==0){
        const arr=["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..." ];
        console.log(i,arr[Math.floor(Math.random()*arr.length)]);
    }
    else{
        console.log(i, "Love me, pet me! HSSSSSS!" )
    }
    
    i++;
}
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12,12];
console.log(nums.length);
nums.sort();
console.log(nums[Math.floor(nums.length/2)]);


function medianNum(nums){
for(let i=0;i<nums.length;i++){
    //nums.sort();
    //console.log(nums)
    if(nums.length % 2 == 0){
        let arr1 = nums.slice(0,Math.floor(nums.length/2));
        let arr2 = nums.slice(arr1.length);
        let last=arr1.length-1 ;
        let first = arr2[0];
        let sumArr = (first+last)/2;
        return sumArr;
        //console.log(first,last)
    }
    else{
        return (nums[Math.floor(nums.length/2)]);
        //console.log(nums[Math.floor(nums.length/2)]);
    }
}
}
console.log(medianNum(nums));


//Return of the Closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  let  kristynsShoe = kristynsCloset[0];
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);
  console.log(`Kristyn says: I'm going to wear ${kristynsCloset[1]},${kristynsCloset[3]} and ${kristynsCloset[4]} . Thoms says: I'm going to wear ${thomsCloset[0][1]},${thomsCloset[1][2]} and ${thomsCloset[2][2]}`);

  for(let i=0;i<kristynsCloset.length;i++){
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
  }

  for(let i=0;i<thomsCloset.length;i++){  
    for(let j=0;j<thomsCloset[i].length;j++){  
       console.log(thomsCloset[i][j]);
    }
  }

  
