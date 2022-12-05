let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arr = []
for (let i =10; i < 100; i=i+20) {
  
   // console.log(i);
    arr.push(i);
  }
for (let j =20; j <= 100; j=j+20){
    // console.log(i);
  arr.push(j)
   }
//console.log(arr);

let i = 5;
while (i < 100) {
  console.log(i);
  i += 5;
}
let bill = 10;
let coo = 4;
let qu = 4;
while(coo < bill){
    let re = bill - coo;
    let total = re * qu;
    console.log(total)
    coo++;
}