const students = ['abul','kabul','babul','dabul','abul','babul', 'sabul'];
const numbers = [2,3,5,6,44,33,65,87,2,5,33,65,87,2,5,33,65,87,2];

function noDuplicate(arr){
    const unique = [];
    for( const item of arr ){
        if( unique.includes(item) === false ){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(students);
console.log(uniqueArray);