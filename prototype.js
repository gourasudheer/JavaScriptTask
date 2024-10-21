const parent = {name:'parent',
    greet:function(){
        console.log("Hi My Name is...!",this.name);
    }
}
const kids = Object.create(parent);
kids.name='kids';
kids.greet(); // inheritance
parent.greet();