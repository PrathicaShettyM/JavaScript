// var declared without let var const
x = 4
y = 7
console.log(x+y);

// js objects
const Car = {
    name:"BMW",
    cost: 1230000,
    color: "grey",
    fun: function(){
        return this.name + this.color;
    }
  
}
//document.getElementById("obj").innerHTML = "The Car is " + Car.name + " and it is " + Car["color"] + " in color";
console.log(Car);

fcall = Car.fun();
console.log(fcall);