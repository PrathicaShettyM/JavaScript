## JavaScript output
1. innerHTML : write into html
2. document.write() : write to html output
```
note: 
* Never call document.write after the document has finished loading.
* It will overwrite the whole document.
* use it only for testing

```
3. window.alert() : alert
4. console.log() : display in console
5. window.print() : print the entire webpage

## variable declaration in JS (4 ways):
1. automatically(like x = 9)
2. let (block scope)
3. const (block scope)
4. var (for old browsers) (golbal scope, can be redeclared also)

## JS arithmetic
* note:
```
const x = 3 + 5 + volvo = 8volvo
const y = volvo + 16 + 4 = volvo64
```
* `note:` math.pow(2,3) same as 2**3 (2 power 3)
* js numbers are always `double`
* js datatypes are `dynamic`: same variable can store both numbers, decimal and strings

## JS Objects

* NOTE: to check if the object exists then give condition : `if(x == "undefined")`

1. accessing objects in webpage (2 ways)
* object.key
* object["key"]
```
    document.getElementById("obj").innerHTML = "The Car is " + Car.name + " and it is " + Car["color"] + " in color";
```
2. Functions can also be passed as key val pairs
```
const Car = {
    name:"BMW",
    color: "grey",
    fun: function(){
        return this.name + this.color;
    }
}
fcall = Car.fun(); // function call from the object
```
3. `this` keyword is used to refer to an object's property(key)
`this.name`

4. `new`: is used to create a new object of that type
ex: `let x = new String();` // creates new object of string type

5. JavaScript objects can't be compared

## JavaScript string methods
string = "This is a string and a substring"

1. string.length 

2. string.slice
* string.slice(startIndex, endIndex-1)
* string.slice(-10) : slice last 10 characters or string.slice(-10,-3) : in this range

3. substr.substring(2,20) : find substring within this range

4. str4.replace("Microsoft", "Google") : replace the first string with the 2nd string
 * to make "Microsoft" case insensitive use `i flag` `.replace(/MICROSOFT/i, Google)`
 * to make `g flag` will make it replace all the "microsoft" in the string
5. repAll = str4.replaceAll("Office", "Branch-Office")

6. str1.concat(" ", str2) : " " can replaced by +,- etc

7. str7.trim() : trims extra white-space before 1st string and after last string
`before : `"      This       is will  be trimmed      iguess       "
`after : `"This       is will  be trimmed      iguess"
* `trimStart()`: trims only in the start and `trimEnd()`: trims only int he end

8. str.charAt(4) : prints character at that index
* charCodeAt() : dives utf code of that character

9. str9.split(" | ") : converts it into new array once it sees the separator mentioned in the braket appears

##### String search methods

* NOTE: `string-string!=error` but `NaN` 

1. str.indexOf("string") : give index of 1st occurence of string
* cant take powerful search values(regex) 

2. str.lastIndexOf("string", loaction(`optional`)) : index of last occurrence of that string

3. str.search("word" or `/word/g`) : search for the word and return index of its index
* cant take 2nd start position arg
* `/g` : perform global search
* `/gi` : global search + case insensitive

4. str.match("word/gi") : match the word
5. str.matchAll("word/gi") : match all occurences of the word
6. str.includes("word") : t/f for word present or not
7. str.startsWith("someWord") : start with this keyword
8. str.endsWith("Word", 11 `{optional}`)


#### String templates
generate html with functionality with js

```
let content = "This is content";
let container = `<h2>${content}</h2>`;
document.getElementById("headTag").innerHTML = container;
```
## JS Numbers
* floating pt arithmetic are not always accurate

* string division, multiplication,subtraction of numbers is possible : `"100"/"10"` , `"100"*"10"`, `"100"-"10"`
`but addition doesn't work`

* NaN (Not a Number) : results from illegal arithmetic operation
* isNaN() : method to check if it is not a number
```
note : 

`NaN + 5 = NaN` but `NaN + "5" = NaN5`
``` 
* `0xFF` : js treats it as hexadecimal val (`0x` starting)

`Number Methods`
* console.log(Number.isInteger(10.5)) : check if it integer

1. num.toString() : converts number to string

2. num.toExponential(power) : same as number raised to the power 

3. num.toFixed(2) : decimal num upto 2 decimal places(type is string)

4. num.toPrecision(3) : round off to 3 decimal places(like 134.8 ~ 135)

5.  Number(true) : 1  
    Number("23") : 23
    => this method convert variable to number

// Parse : divide sentence into parts and identify relation btw them

6. parseInt(" 12 38993") : 12 => parses string and returns whole no. Space is not counted. only 1st no. returned
* parseFloat(" 12.33 ") : is also similar

### Arrays methods

1. `array.length `= to find array length(but dont use this in loop bwcoz it will affect js performance)
2. `array.sort()`: sort the array elements
 
-  HOW TO check if the given object is array or not? use the methods
1. Array.isArray(`arrayname`)
2. `arrayname` instanceof Array 

## More Array methods

1. arr.toString() : convert to string from array form

2. arr.pop() : remove last element of the array

3. arr.push("new-element") : add element at the last to the array

4. arr.shift() : remove 1st element of the array

5. arr.unshift("new-element") : add element to the start of array

6. arr.join(" - ") : join using the given separator(here '-')

7. arr.delete() : deletes element but leaves undefined holes in the array, so use only pop or shift

8. arr1.concat(arr2) : const 2 arrays
* to concat multiple arrays => arr1.concat(arr2, arr3)

9. arr.flat() : `[[1,2], [3,4], [5,6]]` => concats multiple substrings into a single array

10. `arr.splice(2,0,"lemon", "kiwi")` : add new elements to array
* 2 : index where new elements shd be added
* 0 : no. of elements u want it to be deleted
* `"lemon", "kiwi"` : new items to be added in the array

* case 2 : remove "1" element at the index "0" 
useful method to remove elements without leaving any "holes" in the array
```
const numArr2 = [9,8,7,2]
numArr2.splice(0,1)
```

11. i) arr.slice(2) : remove element at 2nd index
    ii) arr.slice(1,3) : remove element from "0" to "3-1" index

NOTE : sorting in case of stringified arrays gives wrong results like "2" can come before "1" 
- to avoid this use the following function
```
 points.sort(function(a, b){return a - b})
```
 
 ### Array iteration methods
 1. map() : create new arr by performing a function on each element
 - `arr.map(callbackfunction)`
 ```
    const arr = [1,4,2,3,7];
    const res = arr.map(func)

    // func is call back function

    function func(arrEle){
        return arrEle*2
    }
    console.log(res);
 ```
2. filter() : filters out element based on condition
- `arr.filter(callbackfunction)`
```
const arr2 = [12,34,56,17]
const res2 = arr2.filter(check)

function check(val){
    return val>18
}
console.log(res2);
```

3. every() : same as filter
4. some() : same as filter
5. find() : same as filter

6. reduce() : reduce each element to produce a single value
* accepts 2 parameters
- `arr.reduce(callback)`
```
const arr3 = [23,45,76,90]
let sum = arr3.reduce(add)

function add(total, val){
    return total + val;
}
console.log(sum);
```
7. indexOf() : returns the index of specified array element
- `arr.indexOf("arrElement")` or
- `array.indexOf(item, start)`

```
const players = ["Virat", "Rohit", "Jadeja", "Pandya", "Rahul"]
let idx = players.indexOf("Pandya")
console.log(idx);
```
8. lastIndexOf() : same as indexOf() but returns last occurence of the specified element

9. entries() : returns new arrays which have indexs and array elements as shown below
```
const arr5 = ["apple","banana","mango","orange"]
const res3 = fruits.entries();
for(let x of res3){
    console.log(x);
}
```
output:
```
[ 0, 'pomogranate' ]
[ 1, 'mango' ]
[ 2, 'banana' ]
[ 3, 'strawberry' ]
```
10. includes(): tells if the given element is present the array
`arr.includes("array elements")`

11. spread(...) operator : concats 2 arrays
`const res = [...arr1, ...arr2]`

## JavaScript Dates
```
const date = new Date(year, month, date, hour, minute, second)
```
1. date-element.toString() : creates date into readable format
```

console.log(d.toString());

output => Thu Nov 02 2023 10:36:00 GMT+0530 (India Standard Time)
```
2. we can also get ISO and UTC standard dates by following the below syntax
`console.log(d.toISOString());
console.log(d.toUTCString());`

### Date methods

* note : JavaScript returns date based on zero index ("0" => January)

1. date.getFullYear() : diplay only year
```
const date = new Date("2023-11-02")
console.log("Year : " + date.getFullYear()); 
```
Output:
```
2023
```
2. date.getMonth() : display month in form of zero based index
```
const date = new Date("2023-11-02")
console.log("Month : " + date.getMonth()); 
```
Output:
```
10 (because of '0' based indexing)
```
*  to display month in the form of string, create full string array 
```
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const date = new Date();

let month = months[date.getMonth()]
console.log("Month is : " + mon);
```
3. getDate() : get date from the input string
```
const date = new Date("2023-11-02)
console.log("Date : " + date.getDate()); 
```
4. `getHours(), getMinutes(), getSeconds(), getMilliseconds()` : to get hours(0-23), minutes(0-59), seconds(0-59), milliseconds(0-999)
```
console.log("Hours : " + date.getHours()); 
console.log("Minutes : " + date.getMinutes()); 
console.log("Seconds : " + date.getSeconds()); 
```
5. getDay() : returns weekday(0-6)
```
console.log("Day : " + date.getDay());
```
-> To get day as a string 
```
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = new Date("2023-11-02")
let daybe = days[day.getDay()]
console.log(daybe);
```


6. getTime() : return time 
```
const t = new Date("2023-11-02")
console.log("Time : " + t);
```
Output:
```
Time : Thu Nov 02 2023 05:30:00 GMT+0530 (India Standard Time)
```

7. Date.now() : returns the no. of milliseconds since jan 1, 1970
```
let ms = Date.now();
console.log(ms);
```
Output:
```
1698910136457(time in milli seconds)
```
### Set date methods

1. setDate() : set date
2. setFullYear() : set full year
3. setHours() : set hr
4. setMinutes() : set min
5. setMilliseconds() : set m sec
6. setMonth() : set month
7. setSeconds() : set sec
8. setTime() : set time

```
const sd = new Date()
console.log("Set year : " + sd.setFullYear(2020));
console.log("Set year : " + sd.setFullYear(2020,11,2));

console.log("Set Month : " + sd.setMonth(11));

console.log("Set date : " + sd.setDate(15) + 13);

console.log("Set hour : " + sd.setHours(22)); 

console.log("Set Minutes : " + sd.setMinutes(30));

console.log("Set milliSeconds" + sd.setMilliseconds(30)); 

console.log("Set Seconds : " + sd.setSeconds(30)); 

console.log("Set Time : " + sd.setTime(12,12,30)); 
```
## Math objects

1. Math  objects are static
2. Math.E : returns Euler's number
3. Math.PI : PI = 3.14
4. Math.SQRT2 = square root of 2
5. Math.SQRT1_2 = square root of 1/2
6. Math.LN2 = natural logarithm of 2
7. Math.LN10 = natural logarithm of 10
8. Math.LOG2E = base 2 logarithm of E
9. Math.LOG10E = base 10 logarithm of E
```
console.log("\nJavaScript Math objects : ");
console.log("PI : " + Math.PI);
console.log("Euler's no : " + Math.E);
console.log("Square root of 25 : " + Math.sqrt(25));
console.log("square toot of 2 : " + Math.SQRT1_2);
console.log("square root of 1/2 : " + Math.SQRT2);
console.log("natural log of 2 : " + Math.LN2);
console.log("natural log of 10 : " + Math.LN10);
console.log("base 2 log of e : " + Math.LOG2E);
console.log("base 10 log of e : " + Math.LOG10E);
console.log(" : ");
```
10. Math.round(x) :  x rounded to its nearest integer
11. Math.ceil(x) :  x rounded up to its nearest integer
12. Math.floor(x) :  x rounded down to its nearest integer
13. Math.trunc(x) :  the integer part of x
14. Math.sign(x) : if x+ve = 1, x = 0, x-ve = -1
```
console.log("Round : " + Math.round(88.7531));
console.log("Ceil : " + Math.ceil(90.7654));
console.log("Floor : " + Math.floor(23.6754));
console.log("Trunc : " + Math.trunc(2345.712));

console.log("Sign : " + Math.sign(-4));
console.log("Sign : " + Math.sign(0));
console.log("Sign : " + Math.sign(4));
```
#Note : Math.log(x) and Math.E are twins
15. Math.pow(8,3) : 8 raised to power 3
16. Math.abs(-4.7) : absolute value of the given number
17. Math.sin(45*Math.PI/180) : for sin45 in degrees
18. Math.cos(30*Math.PI/180) : for cos30 in degrees
19. Math.min(0, 150, 20, 37, -8, -2, -10)
20. Math.max(0, 150, 20, 37, -8, -2, -10)
21. Math.random() : generates a random btw 0 and 1
22. Math.log(3) : log 
23. Math.log2(3): log2
24. Math.log10(3): log10
```
console.log("Power of : " + Math.pow(8,3));
console.log("Absolute : " + Math.abs(-4.7));
console.log("Sin(45) : " + Math.sin(45*Math.PI/180)); // for degrees
console.log("Cos(45) : " + Math.cos(30*Math.PI/180)); // for degrees
console.log("Min function : " + Math.min(0, 150, 20, 37, -8, -2, -10));
console.log("Max function : " + Math.max(0, 150, 20, 37, -8, -2, -10));
console.log("Random number : " + Math.random());
console.log("Log : " + Math.log(3));
console.log("Log2 : " + Math.log2(3));
console.log("Log10 : " + Math.log10(3));
```
* note : random no between 0 and 10 and simliar pattern continues(decimal)
```
Math.random()*10
```
* note : random no btw 0 and 10 (absolute)
```
console.log("Random no. between 0 and 10(absolute) : " + Math.floor(Math.random() * 10));
```
* note : random no btw 1 and 10 (absolute)
```
console.log("Random no. between 1 and 10(absolute) : " + (Math.floor(Math.random() * 10) + 1));
```

** Nullish Coalasing operator : `let res = null??"string"` returns 1st arg if it is not null, returns second it it is null

* `switch cases` use `strict comparision`

* `For in loops` iterates through props of `objects` or elements of `array`

## JavaScript sets
They store collection of unique values
1. create new set
```
   const letters = new Set(["a","b","c"])
   console.log(letters);
```
2. add() : to add set elements
```
const vowels = new Set();
vowels.add("a")
vowels.add("e")
vowels.add("i")
vowels.add("o")
vowels.add("u")
console.log(vowels); 
```
3. values() : returns iterator object containing all values in the set
```
const val = vowels.values()
console.log(val);
```
### JavaScript Maps
holds data in the form of key value pairs
1. Creating a map
```
const fruits = new Map([
    ["apples", 500],
    ["bananas", 200],
    ["oranges",300]
])
console.log(fruits);
```
output:
```
Map(3) { 'apples' => 500, 'bananas' => 200, 'oranges' => 300 }
```

2. set() : to add new entries to the map
```
fruits.set("mangos", 400)
fruits.set("pomogranate",100)
console.log(fruits);
```
3. get("entry-name") : get a particular element from the map
```
let a = fruits.get("apples")
console.log(a);
```
4. size : gives the no. of map elements
```
let len = fruits.size
console.log(len);
```
5. delete("entry-name") : delete that particular element
```
fruits.delete("apples")
```
6. fruits.has("mangoes") : finds if the element is present in the map or not

## JSON
1. convert string to js object
    const obj = JSON.parse(text);

    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

### Regex 
sequence of characters forming a search pattern
1. search() : returns the location of 1st letter of the word(here Whatsapp)
```
let data = "Hi there I'm using Whatsapp"
let n = data.search("Whatsapp")
console.log(n);
```

Note : if u use a variable that is not declared then it has global scope
`carName = "Volvo"` ha global scope

### JavaScript Functions
1. Arrow functions:
```
let hello = (a,b)=>{
    return a*b;
}
console.log(hello(2,3));
```
### JavaScript Classes
1. Creating a class
```
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const Car1 = new Car("Audi R8", 2020)
const Car2 = new Car("Bugati Veron", 2019)
console.log(Car1);
console.log(Car2);
```
1. Creating methods and accessing them
```
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    myNewCar =()=>{
        console.log(`My new car is ${this.name} which I purchased in ${this.year}`);    
    }
}
const Car1 = new Car("Audi R8", 2020)
console.log(Car1.myNewCar());
```







