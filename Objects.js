// 1st methods
console.log("JavaScript Objects\n");
const obj1 = {
    fname: "Prathica",
    lname: "Shetty",
    age: 19
}
console.log(obj1);

// 2nd method
const obj2 = {}
obj2.fname = "Virat";
obj2.lname = "Kohli";
obj2.age = 35

console.log(obj2);

// 3rd method
const obj3 = new Object();
obj3.name = "Ram Charan"
obj3.profession = "Actor"
console.log(obj3);

const x = obj1
x.age = 12
console.log(x);