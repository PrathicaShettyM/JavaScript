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

## variable declaration in js (4 ways):
1. automatically(like x = 9)
2. let (block scope)
3. const (block scope)
4. var (for old browsers) (golbal scope, can be redeclared also)

## js arithmetic
* note:
```
const x = 3 + 5 + volvo = 8volvo
const y = volvo + 16 + 4 = volvo64
```
* `note:` math.pow(2,3) same as 2**3 (2 power 3)
* js numbers are always `double`
* js datatypes are `dynamic`: same variable can store both numbers, decimal and strings

## JS Objects
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






















