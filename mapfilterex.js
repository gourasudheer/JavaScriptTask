const number = [1,2,3,55,44];
const multiplynumbers = number.map(num => num*2); // map changes given array and return array with the same length of the given array
console.log(multiplynumbers);  // map method calls callback function one time for each element in the arraay

const array = [1,2.3,4];
const division = array.map(num => num/3);
console.log(division);

const array1 = [1,22,33];
const modulus = array1.map(num => num%4);
console.log(modulus);

// Filter method..... 