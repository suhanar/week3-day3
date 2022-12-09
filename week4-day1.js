/*How do we assign a value to a variable?

  ans:using const or let eg: const=24
How do we change the value of a variable?
 ans:use let keyword. eg: let a = 20; a=30; 
How do we assign an existing variable to a new variable?
 ans:let exictVar = 'existing'; 
     let newVar = exictVar;
Remind me, what are declare, assign, and define?
  ans : declare : creating a variable is called declare.use let,const to declare a variable eg: let a
        assign : after initialization we will use '=' sign to assign value to that variable
        define : use let or const to define the variables.eg: console.log(num); //undefined
                   var a = 5;
                   console.log(a); // defined
What is pseudocoding and why should you do it?
  ans: it is an informal language for programmers to understand what is going on in their code. its like algorithm or step neede to code it.
  it will help to programmers to understand what's going on
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
60% for designing, like thinking or writing algorithm or step by step procedure for how to approach the problem
40% to code it*/

// String

let firstVariable =  "Hello World";
firstVariable = 25;
let secondVariable = firstVariable;
secondVariable = 60;
console.log("Value of first var " +firstVariable);

let yourName = 'suhana';
console.log( `Hello, my name is ${yourName}`);

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name'=='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false || !false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a *a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');







// The farm
let animal = 'cow';
if(animal == 'cow'){
    console.log('Mooooo');
}
else{
    console.log("Hey! you're not cow");
}

//Driver's Ed

let age1=32;
if(age1>=16){
    console.log('Here is the key');
}
else{
    console.log('Sorry you are not 16');
}

//Loops Write a loop that will print out all the numbers from 0 to 10, inclusive
for(let i = 0;i<= 10;i++){
    //console.log(i)
}
//Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 0;i<= 40;i++){
    //console.log(i)
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i=12; i<=40;i+=3){
  //console.log(i);
}

//Print out the numbers that are within the range of 1 - 100

for(let i=0;i<10;i++){
    if(i%2 == 0){
        console.log(`${i} this number is even`)
    }
    else{
        console.log(i);
    }
}
//Give me Five

for(let i=0;i<=25;i++){
    if(i % 5==0 && i % 3 == 0){
        console.log(`The number is ${i}.High Five Crowd`)
    }
    else if(i % 5== 0){
        console.log(`The number is ${i}.High Five`);
    }else if(i% 3== 0){
        console.log(`The number is ${i}.Crowd`)
    }
    else{
        console.log(i);
    }
}

//Savings account

let bank_account=0;
for(let i=0;i<=10;i++){
    bank_account += i;
    
}
console.log(bank_account);

let bank_account1=0;
for(let i=0;i<=100;i++){
    bank_account1 += i;
    
}
console.log(bank_account1*2);

//printGreeting

//E. Mix It Up

const myArray = [5, 10, 500, 20];
myArray.push('Aegon','nothin');
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();

//const mutate = myArray.reverse();  // mutate two arrays

const mutate = array => [...array].reverse(); //no mutation
console.log(myArray);
console.log(mutate(myArray));




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

 console.log( `Kristyn is rocking with ${kristynsCloset[2]} today!`);
 kristynsCloset.splice(5,0,'rayban')
 
 kristynsCloset[6]="stained knit hat";
 console.log(kristynsCloset);
 const thoms1=thomsCloset[0][0];
 const thoms2=thomsCloset[1][0];
 const thoms3=thomsCloset[2][1];
 console.log(`Thom is looking fierce in a ${thoms1}, ${thoms2} and ${thoms3}!`);
 thomsCloset[1][2] = "Footie Pajamas";




//isVowel
function isVowel(str1){
    if(str1.toLowerCase()=='a'||str1.toLowerCase()=='e'||str1.toLowerCase()=='i'||str1.toLowerCase()=='o'||str1.toLowerCase()=='u'){
        return true;
    }
    else{
        return false;
    }
}
console.log(isVowel('E'))

//getTwoLengths
function getTwoLengths(str1,str2){
   let arr = [];
   arr.push(str1.length,str2.length);
   return arr;
}

console.log(getTwoLengths("Hank", "Hippopopalous"));

//getMultipleLengths


function getMultipleLengths(arr){
   let arr1 = [];
   for(let i=0;i<arr.length;i++){
    arr1.push(arr[i].length)
   }
   return arr1;
   
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// maxOfThree

function  maxOfThree(n1,n2,n3){
     let n=0;
     if(n1>n2){
        n=n1; //   9
     }
     else{
        n=n2;  // 
     }
     if(n3 > n) {   //2 > 9
        n=n3;
     }
     return n;
}
console.log(maxOfThree(6,6,4));
console.log(maxOfThree(6,6,6));
console.log(maxOfThree(6,9,2));

// function  maxOfThree(n1,n2,n3){
//     return Math.max(n1,n2,n3);
// }
// console.log(maxOfThree(6,6,4));
// console.log(maxOfThree(6,6,6));
// console.log(maxOfThree(6,9,2));

//printLongestWord

function printLongestWord(arr){
     let arr1 = [];
     for(let i=0;i<arr.length;i++){
        arr1.push(arr[i].length);
         //6
        // return j;

        
     }
     //return Math.max.apply(null, arr1);
    //console.log(arr1);
    for(let i=0;i<arr1.length;i++){
        let num=arr1.indexOf(Math.max(...arr1)); //8
        return arr[num];
    }

}
console.log(printLongestWord(["Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
console.log(printLongestWord(["Princess", "Diane", "a", "Max",  "big", "Todd","Princess"]));
console.log(printLongestWord(["BoJack777777777777", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
console.log(printLongestWord(['adss','dsd','fef']));

//Make a user object
const user = {
    name : 'suhu',
    email : 'suhu@gmail.com',
    age : 16,
    purchased : []
}
user.email = 'suhana@gmail.com';
user.age++;
console.log(user);
user.location = 'NC';
user.purchased.push('carbohydrates',"peace of mind","Merino jodhpurs");
console.log(user.purchased[2]);

user.friend = {
    name : 'naz',
    age : 16,
    location : 'NC',
    purchased : []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring","A latte");
console.log(user.friend.purchased[1]);

for(let i=0;i<user.purchased.length;i++){
    console.log(user.purchased[i]);
}
for(let i=0;i<user.friend.purchased.length;i++){
    console.log(user.friend.purchased[i]);
}

function updateUser(){
    user.age++;
    let userName=user.name.toUpperCase();
    user.name = userName;
    console.log(user);
}
//updateUser();

function oldAndLoud(person){
    person.age++;
    let userName=person.name.toUpperCase();
    person.name = userName;
    console.log(person);
}
oldAndLoud(user);

const cat1 = {
    name : 'kathu',
    breed : "Mog",
    age : 2
}
console.log(cat1.age);
console.log(cat1.breed);

const cat2 = {
    name : 'titu',
    breed : "Siamese",
    age : 3
}
const combineCats = (cat1,cat2)=>{
    let obj1 ={};
    
    for(let item in cat1){
        if(item == 'breed'){
            obj1[item]=`${cat1[item]}-${cat2[item]}`;
        }else{

            obj1[item]=(cat1[item]+cat2[item]);
        }
       
        
    }
    return obj1;
    
}
console.log(combineCats(cat1,cat2));
//console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
console.log(combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2))))


