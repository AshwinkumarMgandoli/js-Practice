const accountId = 87564;
let accountEmail = "Ashwin@gmail.com";
var accountPwd = "8564";
accountCity = "Bengaluru";
let accountName;

/*
accountId = 2345
console.log(accountId);
assigment to constant variable is not possible
*/

/*
Don't use var because it has issues in block scope and function scope
*/



console.table([accountId, accountEmail, accountPwd, accountCity])
console.log(accountName); //it will be undefined