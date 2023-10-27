//scope --> local and global scope

// let a = 10;
// const b = 20;
// var c = 30;



if(true) {
let a = 10;
const b = 20;
var c = 30;
}

//console.log(a); // a is not defined coxz it is in a scope and has let
//console.log(b);//b is also not defined and is in a scope
console.log(c);//30 is accesbile so we should never use var because it doesnt follow scope rule and can cause manay errors 

//nested functions


function one() {
    let name  = "Ashwin";


    function two() {

       // let age = 22;
        console.log(name);
    }

    two();
//console.log(age) //error because parent function cannot access children function variables but children can access parent functions variables 

}

one();


//=================hoisting===============
//function declaration

function addition(num) {
    return num + 1;
}

console.log(addition(20))

//function expressing

console.log(anotherFunction(30))//error because cant be cALLED before declaration

const anotherFunction = function(num) {
    return num+2;
}














