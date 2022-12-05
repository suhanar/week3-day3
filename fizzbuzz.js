const fb = [];
let i = 0;
while(i < 16){
  i++;
  if(i%5 == 0 && i%3== 0 ){
    fb.push('fizzbuzz');
  }else if(i%5 == 0){
    fb.push('buzz');
  }
  else if(i%3 == 0){
    fb.push('fizz');
  }
  else{
    fb.push(i);
  }
}

console.log(fb);
