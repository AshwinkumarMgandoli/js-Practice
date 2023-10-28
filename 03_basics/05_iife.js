//Immediately invoked function expression

//prevent pollution of the global JS scope

(function one() {
    //named iife
    console.log(`welcome`)
})();  //--------------> iife 

//when two iife is written in a single page you need end the first iife with ;(semicolon) to stop that function or else second function wont run
((name)=>{
    console.log(`Welcome ${name}`)
})("Ashwin")



