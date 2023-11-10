// arrow functions
let hello = (a,b)=>{
    return a*b;
}
console.log(hello(2,3));

let content = ()=>{
    console.log("Hello Arrow function");
    return;
}
console.log(content());

// function expression

const fun = function(a, b){
    return a*b;
}
console.log("product is : " + fun(3,8));

// self invoking function
(function(){
    console.log("Hello Self invoking function"); 
})()

let text = fun.toString()
console.log(text);

function len(a,b){
    return arguments.length;
}
console.log(len(8,10));

// function rest parameter
function sum(...args){
    let sum = 0;
    for(let arg of args) sum+= arg
    return sum
}
console.log(sum(1,2,3,4,5,6,7,8,9,11));

// static class

class Greet{
    constructor(name){
        this.name = name;
    }
    static hello(){
        return "hello"
    }
}
const GoodMorning = new Greet("Good morning")
// console.log(GoodMorning.hello()); = > gives an error
console.log(Greet.hello());