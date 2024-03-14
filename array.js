// array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const friends = ['Abul', 'Babul', 'Cabul', 'Dabul'];
const passed = [ true, false, false, true, false ];
const mixedArray = [ 12, 'Abdul', 34.87, true ];


// ========================================

// Check Array length by using 'length'
console.log(mixedArray.length);

// Array Item position count starts from 0 and ends from length - 1.

/**
 * 
 *  0 => 1 => 2 => 3 => 4 and so on...
 */

// Example: 
console.log(numbers[3]); // get element value by index

/**
 * We can set any element of the array to another variable
 */
// Example:

const fourth = numbers[3];

// Array methods => push, pop, shift, unshift
const ages = [];
const number = [4, 5, 6, 7];

number.push(9); // use push method to add new element in an array
console.log(number);

// Output: [4, 5, 6, 7, 9]

number.pop(); // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.








