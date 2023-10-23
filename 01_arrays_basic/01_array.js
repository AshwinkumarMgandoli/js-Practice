const arr = [1, 2, 3, 4, 5]; // declaring arrays 
//console.log(arr[1]); // accessing arrays using index

const myarr = [2, 7 , 8, 9];
//concat returns new array after concating two arrays, it doesn't change original array.
//console.log(arr.concat(myarr)); 

//push methods add new element at last
myarr.push(20);
//pop method removes last element from the array
myarr.pop();
console.log(myarr);

/* more methods 
1.  includes() ---> returns boolean type if element is present return true if not returns false.\\

console.log(myarr.includes(2)); //returns true
 
2. indexOf()--> returns the index of the given Element

console.log(myarr.indexOf(3)); // if element not present returns -1

3. join()
--> join the arrays but changes the type to string

const new_arr = myarr.join()
console.log(typeof (new_arr)); // STRING

*/
/*Slice()
slice method  returns the new array by slicing the array ,doesnt chnage original array,do0esnt include last given range


const sliced_array = myarr.slice(1,3);
console.log(sliced_array);

console.log(myarr);
*/

/*splice() method--> this splices the array and make changes in the original array and also includes the last given range

*/
console.log(myarr.splice(1,3));



