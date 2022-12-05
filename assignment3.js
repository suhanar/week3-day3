/*Write a while loop for the given output:
 10, 30, 50, 70, 90
 20, 40, 60, 80, 100*/

 let i = 10;
 let j = 20;
 let arr1 = [i];
 let arr2 = [j]
 while(i < 80){
   arr1.push(i+=20);
   arr2.push(j+=20);
 }
 console.log(arr1);
 console.log(arr2);