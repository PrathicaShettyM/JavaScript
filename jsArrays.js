// JavaScript arrays
const charr = ["Volvo", "BMW", "Mercedez"] 
charr[0] = "Ferrari";
console.log(charr);

// array methods
let clen = charr.length;
let csort = charr.sort();

console.log(clen);
console.log(csort);

let flag1 = Array.isArray(charr)
console.log(flag1);

console.log(charr instanceof Array);

// Some more array methods

const fruits = ["orange", "mango", "banana", "apple"]

console.log(fruits.toString());

console.log(fruits.join(" ~ "));

fruits.pop()
console.log(fruits);

fruits.push("strawberry")
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("pomogranate")
console.log(fruits);

console.log(fruits[2]);

const veggies = ["carrot", "beans", "potato"]
console.log(fruits.concat(veggies));

const arr4 = [[1,2], [3,4], [5,6]]
const newArr = arr4.flat()
console.log(newArr);

const numArr = [3,4,5,6]
numArr.splice(2,0, "Lemon", "Kiwi")
console.log(numArr);

const numArr2 = [9,8,7,2]
numArr2.splice(0,1)
console.log(numArr2);

const numArr3 = ["batman", "spiderman", "ironman"]
console.log(numArr3.slice(1));

const arr = [23,45,67,89,20];
console.log(arr.sort());
console.log(arr.reverse());

// JavaScript  array iteration methods
// map()
const arr1 = [1,4,2,3,7];
const res = arr1.map(func)

function func(arrEle){
    return arrEle*2
}
console.log(res);

// filter
const arr2 = [12,34,56,17]
const res2 = arr2.filter(check)

function check(val){
    return val>18
}
console.log(res2);

// reduce
const arr3 = [23,45,76,90]
let sum = arr3.reduce(add)

function add(total, val){
    return total + val;
}
console.log(sum);

//indexof
const players = ["Virat", "Rohit", "Jadeja", "Pandya"]
let idx = players.indexOf("Pandya")
console.log(idx);

//entries
const arr5 = ["apple","banana","mango","orange"]
const res3 = fruits.entries();
for(let x of res3){
    console.log(x);
}
console.log(arr5.includes("mango"));

const favouriteFruits = [...players,...arr5]
console.log(favouriteFruits);









