// Primitive 
// the original reference can't be changed but the copy is altered

// 7 types : String  , Number , Boolean  , null  , undefined , Symbol , BigInt

let score;
// undefined datatype
// datatypes are not defined  here;
// JavaScript is a dynamically typed language, which means that data types of variables are determined by the 
// value they hold at runtime and can change throughout the program as we assign different values to them

const id1 = Symbol('123');
const id2 = Symbol('123');
// Symbol provides a unique returned value to each variable if it

// console.log(id1 === id2);

const big = 345956967694896989n;
// bigint datatypes

// Reference (Non primitive)

// Array  , Objects , Functions

// datatypes of any non primitve is object

const heroes = ["shaktimaan" , "nagraj" , "doga"];

let myobj = {
    
    name : "sambhav",
    age: 22,

}


const myFunction =  function(){

     console.log("Hello World");

}
// data type of this is function object


// console.log(typeof big);

// ********************************

// Stack(Primitve type) , Heap(Non - primitive)

// Stack - gets a copy of the original value of the value
// Heap -  Gets a reference to the original value

let myname = "Hitesh";

let anothername = myname;
anothername = "Sambhav";

// anothername stored in stack gets 
// a copy of "myname" not the original reference;

console.log(myname);
console.log(anothername);

let user1 = {

  email : "user@sambhav.com",
  upi : "user.upi",

}

let user2  = user1;

user2.email = "hitesh@google.com";

console.log(user1.email);
console.log(user2.email);
 
// 
