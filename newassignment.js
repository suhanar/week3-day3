/*- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).*/
/*let arr = [1,2,3,4];
let arr1=arr.forEach(function(num){num});
console.log(arr1);*/
let sumNum = 0;
let arr = [1,2,3,4];
function addList(num){
    for(let i=0;i<num.length;i++){
         sumNum+=num[i];
         
    }
    return sumNum;
}
console.log(addList(arr));
let sumNum1 = 0;
function addList1(num){
    for(let i in num){
       sumNum1 += num[i];
    }
    return `The sum is ${sumNum1}`;
}

console.log(addList1(arr));

let sumNum2 = 0;
function addList2(num,num1 = 0){
    
    for(let i in num){
       sumNum2 += num[i];
    }
    return `The sum2 is ${sumNum2}`;
}

console.log(addList2(1));
let numSum = 0;
let myFunction = (num,num1 =0 ) => {
    for(let i in num){
        numSum += num[i]
    }
    return numSum;
};
console.log(myFunction());
