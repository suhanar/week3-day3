//Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.
function minusOne(num){
    if(typeof(num)=='number'){
        return num-1;
    }
    else{
        return num;
    }
    
}
console.log(minusOne(100));
console.log(minusOne('infinity'));

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
console.log(getLastElement([1,2,3,4]));