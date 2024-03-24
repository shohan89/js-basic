function oddAvg(numbers) {
    const odds = [];
    for ( const number of numbers ) {
        // console.log(number);
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }
    // this is the array that conatains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for ( const number of odds ){
        sum = sum + number;
    }
    const count = odds.length;
    console.log('Odds: ' + count);
    const avg = sum / count;
    // console.log('The avg of the odds is: ' + avg);
    // console.log(sum);
    return avg;
}
const numbers = [3, 2, 1, 5, 44, 48, 23, 45, 98, 99];
const avg = oddAvg(numbers);
console.log("Average of the odd numbers: " + avg);
