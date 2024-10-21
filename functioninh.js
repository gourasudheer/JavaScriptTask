function parent(name){
    var obj = {};
    obj.name = name;
    obj.sayHi= function(){
        console.log("Hi My Name is ",this.name);
    }
    return obj;
}
function child(name,age){
    var obj = parent(name);
    obj.age = age;
    obj.sayBye= function(){
        console.log("Bye from..!",this.name);
    }
        return obj;
}
var childObj =child('sudheer',92);
childObj.sayHi();
childObj.sayBye();