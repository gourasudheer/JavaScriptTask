function removeDuplicates(array1) {
    let uniquenumbers = [];
    for (let i = 0; i < array1.length; i++) {
        if (uniquenumbers.indexOf(array1[i]) === -1) {
            uniquenumbers.push(array1[i]);
        }
    }
    return uniquenumbers;
}
let array2 = [1, 2, 2, 3, 3, 4, 4, 2, 3, 5, 5, 6, 6, 1];
let uniqueArray = removeDuplicates(array2);
console.log("Unique numbers in the array:");
console.log(uniqueArray);
