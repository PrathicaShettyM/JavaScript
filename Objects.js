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

let displayObj = Object.values(person)
console.log(displayObj);

let displayObj2 = JSON.stringify(person)
console.log(displayObj2);

// getter
const p1 = {
    firstName : "Virat",
    lastName : "Kohli",
    language : "Hindi",
    get lang(){
        return this.language
    }

}
console.log(p1.lang);

// setter
const p2 = {
    firstName : "Virat",
    lastName : "Kohli",
    language : "Hindi",
    style : "",
    set battingStyle(sty){
        return this.style = sty
    }
}
p2.battingStyle = "right"
console.log(p2.style);

// Object.defineProperty() : used to add getters and setters
// counter example
const obj = {counter : 0}

Object.defineProperty(obj, "reset", {
    get: function(){
        this.counter = 0
    }
})
Object.defineProperty(obj, "increment", {
    get: function(){
        this.counter++
    }
})
Object.defineProperty(obj, "add", {
    set: function(value){
        this.counter+=value
    }
})
Object.defineProperty(obj, "subtract", {
    set: function(value){
        this.counter-=value
    }
})

obj.reset;
obj.increment;
obj.add = 5;
obj.subtract = 2;
console.log(obj.counter);






























