// There is a proposal for a 'temporal' as a global object for date and time in js

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// myDate is a object

let myCreatedDate = new Date("01-14-2024");
//months start from 0 in JS

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(typeof myTimeStamp);
// //give value in milliseconds
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default' , {
    weekday : "long"
})

// doubt

console.log(newDate.getweekday());



