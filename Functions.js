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