//crating object in other way 
//singleton
const user1 =  new Object();

user1.id = "123abc";
user1.name = "ashwin";
user1.place = "bengaluru";

console.log(user1)

//nested objects
const user2 ={
    id:"1234",
    fullName :{
        firstName:"ashwin",
        lastName:"kumar",
    }
}

//accessing using dot
console.log(user2.fullName.firstName)

//option chaining
const user3  = {
    1:"a",
    2:"b",
}

const user4  = {
    3:"c",
    4:"d",
}

//merging objects using assign operator
const user5 = Object.assign({},user3,user4);
console.log(user5)

//merging using spread operator

const user6 = {...user3,...user4};
console.log(user6)



