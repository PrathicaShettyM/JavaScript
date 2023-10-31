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
3. Functions can also be passed as key val pairs
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
2. `this` keyword is used to refer to an object's property(key)
`this.name`

3. `new`: is used to create a new object of that type
ex: `let x = new String();` // creates new object of string type

## JS events


