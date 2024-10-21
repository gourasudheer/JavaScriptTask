function f1(){
    let  a = 3;
    function inner(){
        return a;
    }
    return inner;
}
let getinner = f1();
console.log(getinner());