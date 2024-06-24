console.log("Good");

const mySym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "full name" : "Hitesh Chaudhary",
    [mySym] : "myKey1",
    // to make into it a symbol
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIN : false,
    lastLoginDays : ["Monday" , "Sunday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
// console.log(Juser.mySym);
// data type of mySym is still string

// Thus we have to use like this
console.log(Jsuser[mySym]);

Jsuser.email =  "hitesh@chatgpt.com"
// Object.freeze(Jsuser);
// to lock the object to prevent any further changes in it
// Juser.email = "Hitesh#nfjkfn";

// functions are treated as first grade citizens

Jsuser.greeting = function(){
    console.log("Hello Js user");
}

Jsuser.greeting2 = function(){
    console.log(`Hello Js user , ${this.name}`);
}
// reference karne ke liye use the above syntax

console.log(Jsuser.greeting);
console.log(Jsuser.greeting2());