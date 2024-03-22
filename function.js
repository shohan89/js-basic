function even(numbs){
    const evens = [];
    for( const numb of numbs ){
        if( numb % 2 === 0 ){
            console.log(numb);
            evens.push(numb);
        }
    }
    return evens;
}

const numbs = [5,8,6,2,4,7];
const evens = even(numbs);
console.log('even numbers are: ', evens);