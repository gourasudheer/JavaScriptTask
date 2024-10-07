let string = "Hello Customer";
console.log(string); //Before calling function

function changestring(str){
    str = "Welcome";
    console.log("Inside =", str);
}

changestring(string)
console.log(string); //After calling function