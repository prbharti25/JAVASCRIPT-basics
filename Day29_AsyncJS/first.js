console.log("Hello World");

function meet(){
    const arr = [2,4,6,18,22];
    console.log(arr[0]);
}

function greet(){ 
    const a = 2 + 6;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program Ended!");

// ------JS code runs in two phase------
// 1. Memory Allocation phase 
// 2. Code run phase

// ------STACK----->
// Global Execution Context : contains the entire code
// Execution Context: When there is a function call then code for the function is pushed on to the stack as Execution Context.