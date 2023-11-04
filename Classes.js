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
const Car2 = new Car("Bugati Veron", 2019)
console.log(Car1);
console.log(Car1.myNewCar());
console.log(Car2);
console.log(Car2.myNewCar());