// sets
const letters = new Set(["a","b","c"])
console.log(letters);

const vowels = new Set();
vowels.add("a")
vowels.add("e")
vowels.add("i")
vowels.add("o")
vowels.add("u")
console.log(vowels);

const val = vowels.values()
console.log(val);

// maps
const fruits = new Map([
    ["apples", 500],
    ["bananas", 200],
    ["oranges",300]
])
console.log(fruits);

fruits.set("mangoes", 400)
fruits.set("pomogranate",100)
console.log(fruits);

let a = fruits.get("apples")
console.log(a);

let len = fruits.size
console.log(len);

fruits.delete("apples")
console.log(fruits);

console.log(fruits.has("mangoes"));