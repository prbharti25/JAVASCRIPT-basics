// let arr=[5,10,15,20,12.12, "pushp"];
// console.log(arr);
// console.log(typeof arr);  //type of arr -> object


// object
// key:value
// similar type of data in same group
// why not array: difficult to identify which type of data

// let obj=
// {
//     user_name:"pushp",
//     account_no: 12345676543,
//     balance:432
// }
// console.log(obj);


// function : we can assign a  function in a variable
// let fun = function()
// {
//     console.log("Hello Coder Army!!");
//     return "hi";
// }
// console.log(fun());  //typeof fun: function,  typeof func(): string ("hi")


// TYPE CONVERSION
// let account_balance = "100";
// console.log(account_balance);
// console.log(typeof account_balance);
// let num= Number(account_balance);
// console.log(num);
// console.log(typeof num);

// boolean to number
// let bool=true;
// console.log(typeof bool);
// console.log(typeof Number(bool));




// let account="100xs"  
// console.log(Number(account));  //NaN: not a number

// let x=null;  //null
// console.log(Number(x));     //0

// let x2; //undefined
// console.log(Number(x2));    //NaN

// let ab=20;  //number
// console.log(String(ab));   // "20"

// let ax=true;  //boolean
// console.log(typeof ax);
// console.log(String(ax));  //  "true"

// let abc="";
// abc = " ";  //true 
// console.log(Boolean(abc));  // empty string gives --> false



//-----OPERATORS-----------
//Divide and Multiply --> Same Precedence left to right
//  Addtion and Subtraction  -->Same precedence left to right

console.log(6*3+18/6-9);    //12


// console.log(20%3);  //2 (%) --> gives remainder

// ++ --> Increment Operator
// -- --> Decrement Operator
// = --> Assignment Operator
// == --> value comparison 
// === --> type and value compare
let sum=20;
let sum1=++sum;
console.log(sum++);
console.log(sum1);
console.log(sum); 

