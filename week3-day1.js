/*- Write a function called addList that accepts any quantity of numbers as arguments,
  adds them together and returns the resulting sum.
- Assume all parameters will be numbers. <=========
- If called with no arguments, return 0 (zero).*/
let sumNum = 0;
let addList = (...num) =>
{
    if(num.length==0){
        return 0;
    }
    for(let i in num){
       sumNum += num[i];
    }
    return sumNum;
}
console.log(addList(10,10,90));

