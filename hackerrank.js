function verify(inputValue){
    return inputValue;
}

function makeInputVerifier(minimum, maximum) {
    // write your code here
    if(verify() < minimum){
        return 'Input is less than minimum value'
    }
    else if(verify() >= minimum && verify() <= maximum ){
        return 'Input is in range';
    }
    else{
        return 'Input is more than maximum value';
    }
    
     
  }
  
  console.log(verify(15));
 console.log(makeInputVerifier(10,20));