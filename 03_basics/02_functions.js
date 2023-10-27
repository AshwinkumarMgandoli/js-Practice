//rest operator --> used when we dont know about how many values will be passed in a function then rest is used
//real world example --> adding items to the cart/
//create a array to store those values 


function addition(...nums) {
return nums;
}

const result = addition(10, 20, 30);
console.log(result);


//passing objects in js functions


const user  = {
    name : "Ashwin",
    price : 200,
}

function handleObject(anyObject) {
    console.log(`name is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user);


function loginUser(name = "Ashwin") {
if(!name){
    console.log(`enter valid details`);
    return
}

console.log(`welcome ${name}`)
return

}

loginUser("Ashwin");