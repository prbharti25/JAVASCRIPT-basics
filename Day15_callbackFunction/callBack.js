//------------------------ CALL BACK FUNCTION -> ek function banaya and uske
// argument me dusre funciton ka referece pass krdiya call krte waqt

function names(fun)
{
    console.log("Hello, i am pushp raj bharti");
    fun();
}
function greet()
{
    console.log("I am call back function");
}

// names(greet);    //we are passing greet function as a reference to the argument of name function  
//this is call back function
// Remember not to use --> name(greet())

// or
// names(function greet()   //this is also call back function
// {
//     console.log("I am call back function");
// })

// or
// const greet=function()
// {
//     console.log("I am call back function");
// }
// names(greet);

// names(()=>{
//     console.log("I am call back function");
// })

gun = ()=> {
    console.log("This is what it is!!");
}
// gun();

// //real world use case of call back function
// //calling function in fixed interval to update data from backend(server). 
function fetchdata()
{ 
    console.log("I am fetching data from backend");
}

//call back function
setInterval(fetchdata,5000);    //5000ms
// setInterval is  itself a function in which we are passing referce of a function fetchdata()