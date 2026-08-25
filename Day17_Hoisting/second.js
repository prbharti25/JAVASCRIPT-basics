// Function declarations are fully hoisted, so they can be called before their definition.
// Function expressions (even with var, let, or const) are not initialized until the interpreter reaches them, 
// so they cannot be used before their definition.




greet();

function greet(){
    console.log("Hello World");
}




// Hoisting: Variables declared using var are hoisted, but their values (in this case, the function) are not 
// initialized until the interpreter reaches that line of code.
// At the point where you attempt to call meet() (before its definition), the variable meet is declared 
// but has a value of undefined.
// Thus, calling meet() before its definition results in a TypeError because you are trying to call undefined.

// meet();
var meet=function(){
    console.log("Hello Meet");
}

meet(); //(no Error) when function is called then memory allocation happens for it.
// // Memory allocation:  (var meet())
// // meet: function
// // Code execution phase:




// var x;

// console.log(x);
// x = 10;







