// JAVASCRIPT is a single threaded synchronous language : It means it executes one task at a time and one by one.

console.log("This is at number 3");

// This is asnychronous task
// setTimeout is not the part of JS but part of WebAPI.
setTimeout(()=>{
    console.log("This is at 6");
},2000);


// This is synchronous task
const timer = Date.now(); //time in milliseconds(older time)
while(Date.now()-timer<1000){
    // wait for 2 seconds
    // console.log("wait..");
}

console.log("This is at 18");

// EventListener, Window object, document.getElementById, console etc are not the part of JS.