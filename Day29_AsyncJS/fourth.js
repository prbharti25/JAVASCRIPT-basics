console.log("I am executed first");


// asynchronous task (Doesn't execute immediately but some conditions to be met to execute)
//Promise
fetch("https://youtube.com")    
.then(()=>console.log("Hello"));

console.log("I am executed last"); 


// callStack(runs the code)(Global Execution Context-GEC)
// Microtask Queue(for Promises), Web API(stores callback function/code to be executed)
// Callback Queue(like SetInterval, SetTimeout etc.), Event Loop(if callStack is empty then it pushes code form microtask/callback queue to call stack)
// Microtask Queue > Callback Queue (priority)
