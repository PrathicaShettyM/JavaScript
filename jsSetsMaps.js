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

// json

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(obj);

// regex
let data = "Hi there I'm using Whatsapp"
let n = data.search("Whatsapp")
console.log(n);

let data2 = "I'm sure INdia is gonna win the world cup this time. INdia has absolutely been dominant this time. After all team inDIA has one of the best players in the world"
let n2 = data.search(/GONNA/i);
console.log(n2);

const pat = /india/i
let newRes = data2.replace( pat, "TEAM India")
console.log(newRes);

const pattern = /e/
console.log(pattern.test("One of the best"));
















