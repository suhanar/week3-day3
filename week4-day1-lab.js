//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.
function minusOne(num){  // num = 10;
    // if(typeof(num)=='number'){  // if the type of num is number
    //     return num-1;      // num- 1=> 10-1 = 9;
    // }
    // else{       // string, boolean
    //     return num;   //'gvhj' = 'gvhj
    // }
   return num-1;

    
}
//console.log(minusOne(100));
//console.log(minusOne(78));    //num = 78;
console.log(minusOne(Infinity)); 

//console.log("type of this is " +typeof(true));








//Write a function makeSentencethat takes three parameters and concatenates them into a fully formed sentence.

function makeSentence(str1,str2,str3){
    return `Oh boy, do ${str1} ${str2} ${str3} or what`;

}
console.log(makeSentence('I', 'want', 'chimichangas'));



// Write a function called getLastElementthat takes a parameter arr.
// Invoke the function with an array as the argument.
// The function should print the last element within the array.



function getLastElement(arr){
    let arrval=arr[arr.length-1];
    return arrval;
}
console.log(getLastElement([1,2,3,4,5]));
console.log(getLastElement([[1, 2, 3], [4, 5, 6]]));
console.log(getLastElement([1, 2, 3, 4, 5, 6]));       // 6
console.log(getLastElement(['a', 'b', 'c']));   