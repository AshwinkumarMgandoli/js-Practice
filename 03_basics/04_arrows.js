//this -> this refers to current context

const user = {
    name : "Ashwin",
    age : 21,

    welcome: function() {
        console.log(`${this.name} welcome .`)
        console.log(this);
    }

}

user.welcome();


//console.log(this) // displays an empty object

// function chai() {
//     console.log(this); // it doesnt work inside functions
// }

// chai();

// const addTwo = () => {
//     console.log(this)
// }


// addTwo();

//in arrows this doesnt work
const addThree = (num1, num2) => {
    return num1 + num2;
}

console.log(addThree(2,6));




