const accountId =  144523
// constant valued
let accountEmail = "hitesh@google.com"
var  accountPassword = "12345"
accountCity = "Jaipur"
// variable can be declared like above
let accountState;

// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "212121212"
accountCity  = "Bengaluru"
console.log(accountId);

/*
Prefer not to use var because of problem of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity , accountState]);