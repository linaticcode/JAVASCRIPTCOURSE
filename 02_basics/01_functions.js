function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();
// number1 and number2 are parameters
// function addTwoNUmber(number1 , number2){
//         console.log(number1 + number2);
// }

// function addTwoNumbers(number1 , number2){
//    return  number1 + number2;
// }

// const result = addTwoNumbers(3 , 5);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return;                 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh"))
// if no parameter is passed within then it is called as undefined



