// FUNCTIONS------------------------

function greet()
{
    console.log("Hello Coder Army");
    console.log("This is an example of use case of function");
}
// greet();


// parameter
function sum(num1, num2)
{
    console.log("Sum: ", num1+num2);
}

//  function call: Argument
// sum(11,12);


function product(num1, num2)
{
    console.log("Product: ", num1*num2);
}

// product(11,12);



const fun1= function welcome()  //function can be stored in any variable
{
    console.log("Welcome to your personalised PC");
    console.log("Kaise ho..")
    return "end";
    console.log("i cannot be printed!!");
}

fun1();
console.log(fun1); //fun1 is variable
console.log(fun1());



//--------------------------- Arrow Function
const fun=()=>{
    console.log("This is Arrow function");
    return "end"; 
}

fun();
console.log(fun());



const sum1=(num1,num2)=>num1+num2;
// {
//     return num1+num2;
// }

console.log(sum1(12,13));



// function  
// if there is only single parameter no need to use bracket
const cube=num1=>num1*num1*num1;
console.log(cube(8));



//  rest operator
const summ= function(...number)
{
    // using for loop we can calculate sum
    let sum = 0;
    for(let i=0; i<number.length; i++){
        sum = sum + number[i];
    }
    console.log(number);
    console.log(sum);
}
summ(1,2,4,6,8,10,5,4);     //pass any number of arguments
summ(99,101);



let obj=
{
    name:"Pushp",
    age:12,
    amount:123,
}

// function fun2(obj)
// {
//     console.log(obj.name, obj.age);
// }
// fun2(obj);

// OR
function fun4(obj6)
{
    let {name: names, age: ages} = obj6;    //new variable names and ages is created obj6 refers to the obj only
    names= "Ramesh";
    ages = 23;
    // console.log(names, ages);
    // console.log(obj6);  //obj6 refers to the obj (pass by reference)
    
}
// fun4(obj);       //pass by value so no change in original
// console.log(obj);    

// OR
function fun3({name, amount})    //destructure 
{
    name = "Amit";
    amount = 500;
    console.log(name, amount);
}
fun3(obj);      //pass by value so no change in original
console.log(obj);   



// prototype---------------
let obja= {
    a:1,
    b:2
}

let objb ={
    c:3,
    d:4
}
// objb.__proto__=obja;     //this is how prototype is changed --> not a healthy way to use this instead
objb= Object.create(obja);  // use this to change prototype

console.log(objb.__proto__);
console.log(Object.prototype);