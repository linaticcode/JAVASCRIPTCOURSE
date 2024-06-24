const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// also called string interpolation

const gameName = new String('hitesh-hc-fc')
 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length); 
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 4)
// starting from begin 4 letters
// substring method always starts from 0 index , whatsoever may be the index;
// console.log(newString);

const another = gameName.slice(-8 , 4);
// console.log(another);

const stringone = "  hitesh  ";
console.log(stringone);
console.log(stringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20' , '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))
// converts string into array on the basis of a separator








