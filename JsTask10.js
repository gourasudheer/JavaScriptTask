function sortdecending(array1){
    return array1.sort((a,b) => b-a);
}
let array2 = [3, 44, 55, 6, 77, 8, 29 ];
let sortarray = sortdecending(array2);
console.log("Decending Order:");
console.log(sortarray);