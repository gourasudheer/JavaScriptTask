//global scope we can call it before,after and inside the function
var num = 123;
console.log(num);
function f1(){
    console.log(num);
}
f1()