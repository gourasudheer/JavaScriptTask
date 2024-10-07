function addition(n1,n2){
    return n1+n2;
}
function multiplication(n1,n2){
    return n1*n2;
}
function subtraction(n1,n2){
    return n1-n2;
}
function division(n1,n2){
    if(n2 === 0){
        return " 0 is not allowed to divisible"
    }
    return n1/n2;
}
function modulus(n1,n2){
    return n1%n2;
}
let n1 = 22;
let n2 = 44;
console.log("Addition:", (n1+n2));
console.log("Multiplication:", (n1*n2));
console.log("Subtract:", (n1-n2));
console.log("division:", (n1/n2));
console.log("modulus:", (n1%n2));