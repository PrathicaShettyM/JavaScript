class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    myNewCar =()=>{
        console.log(`My new car is ${this.name} which I purchased in ${this.year}`);    
    }
    present(){
        return 'I have a ' + this.name
    }
}
const Car1 = new Car("Audi", 2020)
const Car2 = new Car("Bugati", 2019)
console.log(Car1);
console.log(Car1.myNewCar());
console.log(Car2);
console.log(Car2.myNewCar());


// inheritence
class Model extends Car{
    constructor(name, mod){
        super(name)
        this.model = mod
    }
    show(){
        return this.present() + "Car which is an " + this.model + " Model";
    }
}
let Car1Description = new Model("Audi", "R8")
console.log(Car1Description);
console.log(Car1Description.show());
