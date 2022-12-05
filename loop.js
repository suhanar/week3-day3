for(let i=0 ; i <=  10 ; i++){
    if( i % 2 == 0){
        console.log(i , " Even")
    }
    else{
        console.log(i , "odd");
    }
}

const hashs = ['#','##','###','####'];
for(let i=0; i<hashs.length;i++){
    console.log(hashs[i]);
}

console.log(hashs[2]);

let movies = ['suhu',1,2,3];
movies.push('harrypotter',"Indian Jones");
console.log(movies);
movies.unshift('starwars');
movies.shift();
movies.pop();n
console.log(movies);