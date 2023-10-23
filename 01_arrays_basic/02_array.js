// array continued //

const old_number  = [1, 2, 3, 4];
const new_number  = [5, 6, 7, 8];

/*new_number.push(old_number);

console.log(new_number); //This creates array inside array

//const modified_num = new_number.concat(old_number);
console.log(modified_num);// this returns a copy of that array and doesnt change the original array */


/*spread operator--> (...) // concats tow or more arrays into one
const modified_num = [...new_number,...old_number];
console.log(modified_num);
*/


/*flat --> returns a new array within single array
const newww_array = [1,2,3,[4,5,6],[3,8,9,[7,8,9]]];
//depth shouldbe mentioned
const another_array = newww_array.flat(Infinity);
console.log(another_array);
*/


/*
console.log(Array.isArray("ashwin")); //returns false because isArray return boolean

console.log(Array.from("ashwin"));//makes ashwin as new array [a,s,h,w,i,n];

let a = 1;
let b = 2;
let c = 3;

console.log(Array.of(a,b,c));
*/



