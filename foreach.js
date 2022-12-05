let movies = ['harry potter' , 'star wars', 'christmas chronicles']

movies.forEach(function(movie){
    //console.log(movie);
})

const num = [1,2,3,4]
const nam = ['ram','nab'];
const combine = [...num,...nam];
console.log(combine);
function add(...num){
    sum = 0;
    sum += num;
    return sum;
}
console.log(add(num));
