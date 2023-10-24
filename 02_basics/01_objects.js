//objects --> key value pairs and is a collection of properties

//object creation

//we can add symbol
 
const mysm = Symbol("key1");
const jsUser  = {
    name: "Ashwin",
    age: 21,
    [mysm]:"keypoint",
    isStudent: true,
    location: "Bengaluru",
    "full name": "Ashwinkumar M G"
}

//accesing using square bracket and also dot
//by usingg dot

console.log(jsUser.name);

//by using bracket
console.log(jsUser["full name"]);
console.log(jsUser[mysm]);

//we can lock out object using freeze method
//Object.freeze(jsUser);
jsUser.Gender = "male";
console.log(jsUser); 


//we can add functions inside object
jsUser.greeting = function(){
    console.log(`hello ${this.name}`);//interpolation//this --> refers to an object
}

console.log(jsUser.greeting());
console.log(jsUser.isStudent ? "yes" : "No"); // prints yes





