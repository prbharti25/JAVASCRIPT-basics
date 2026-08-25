// SCOPE------------------
// Global scope, local scope(functional scope), block scope

// GLOBAL SCOPE (outside)
// let a=10;
// var b=20;
// const c=30;

// function call()
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log("Global scope")
// };
// call();


// local scope(or functional scope)
function call()
{
    let a=10;
    var b=20;
    const c=30;
    console.log("Local scope")
    console.log(a,b,c)
};
// call();
// console.log(a);      //error
// console.log(b);     //error

//suppose
var amount=222;
if(true)    //blocked scope {inside except function}
{
    let a=10;
    amount=385; 
    const c=30; 
    console.log(amount);
}
var amount=230;
// console.log(amount);

// console.log(a);  //error
// console.log(c);  //error

//-----var doesn't follow blocked scope
// for(var i=0; i<5; i++) 
// console.log("12345"); 
// console.log(i);     //error: if (let i)

let price=346;  //global scope
if(true)
{
    let price=246;  //blocked scope : so valid
    // let price=235; //error
}
// In case of global scope: we cannot re-declare two variables of same name (for let, const only)
// let price=32; //error
// console.log(price);


// console.log(amounta);   //error: local scoped
// let amounta=20;
// console.log(b);    //error: local scoped
// const b=30;
// console.log(c); //undefined   
// var c=20;    //since globally scoped


greet();    //no issue
function greet() 
{
    console.log("hello greet")
}

// meet();  //error
const meet=function()
{
    console.log("Hello meet");
}
// meet();



