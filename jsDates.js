const d = new Date();
console.log(d.toString());
console.log(d.toISOString());
console.log(d.toUTCString());
console.log(d);

const d2 = new Date("2022-03-25")
console.log(d2);

console.log("Long dates : ");
const longDates = new Date("2 Nov 2023")
console.log(longDates);

console.log("Short Dates : ");
const shortDate = new Date("12/03/2023")
console.log(shortDate);

let newDate = Date.parse("December 18, 2023")
console.log("date parsing : " + newDate);

// JavaScript date methods
const dm1 = new Date("2023-11-02")
console.log("Year : " + dm1.getFullYear()); 

console.log("Month : " + dm1.getMonth());
// to display month in the form of string, create full string array 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dm1i = new Date();
let mon = months[dm1i.getMonth()]
console.log("Month is : " + mon);


console.log("Date : " + dm1.getDate()); 

console.log("Hours : " + dm1.getHours()); 

console.log("Minutes : " + dm1.getMinutes()); 

console.log("Seconds : " + dm1.getSeconds()); 

console.log("Day : " + dm1.getDay());
// to display day as strings
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = new Date("2023-11-02")
let daybe = days[day.getDay()]
console.log(daybe);

const t = new Date("2023-11-02")
console.log("Time : " + t);

let ms = Date.now();
console.log(ms/(1000*60*60*24*365));
// division is for getting the no of years

// Set Date methods
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

// comparing dates
let text = "";
const today = new Date();
const someDay = new Date();
someDay.setFullYear(2100,0,14);
if(someDay > today){
    text = "Today is before Jan 14, 2100"
}else{
    text = "Today is after Jan 14, 2100"
}
console.log(text);

























