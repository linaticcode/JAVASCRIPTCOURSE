// array

const myArr = [0 , 1 , 2 , 3 , 4 , 5]
const myHeros = ["Shaktimaan" , "Naagraj"]

const myArr2 = new Array(1 , 2 , 3 , 4)
// console.log(myArr[0]);

// Array Methods

myArr.push(6);

myArr.unshift(9);
// Unshift inserts element in th front
myArr.shift();
// shift again shifts towards left
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice

console.log("A" ,myArr);

const myn1 = myArr.slice(1 , 4);

console.log(myn1);

const myn2 = myArr.splice(1 , 3);
// splice changes the original array
console.log(myArr);
console.log(myn2);