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

// for in loop
let txt = "";
for(let x in obj1){
    txt += obj1[x] + " "
}
console.log(txt);

delete obj1.age;
console.log(obj1);

console.log("\nNested objects : ");
obj4 = {
    fname: "Prathica",
    lname: "Shetty",
    skills: {
        s1 : "JavaScript",
        s2 : "Java",
        s3 : "Python",
        s4 : "C++"
    }
}
console.log(obj4.skills.s2);

console.log("\nnested objects and arrays : ");
const obj5 = {
    name : "Ninja",
    age : 20,
    cars : [
        {brand : "Audi", price : "29000"},
        {brand : "BMW", price : "35000"},
        {brand : "Ferrari", price : "42700"}
    ]
}
console.log("display contents : ");
let txt2 = ""
let txt3 = ""
for(let i in obj5.cars){
    txt2 += obj5.cars[i].brand + " "
        for(let j in obj5.cars[i].price){
            txt3 += obj5.cars[i].price[j] 
        }
}
console.log(txt2);
console.log(txt3);

// adding method to an object
person = {
    fname : "Ninja",
    lname : "Hattori"
}
person.FullName = function(){
    return this.fname + " " + this.lname
}
console.log(person.FullName);
console.log(person.FullName().toUpperCase());

// using built in functions
let msg = "hello javascript"
let x1 = msg.toUpperCase()
console.log(x1);








