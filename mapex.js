const map = new Map([["sudheer",10],[3,"alphastring"]]);
map.set(1,"valid");
map.set("notvalid",4);
console.log(map.get("sudheer"));
console.log(map.get(3));
console.log(map.get(1));
console.log(map.get("notvalid"));

const set = new Set([22,22]);
set.add("sudheer");
set.add("sudheer","How are you");
set.add(25);
console.log(set);