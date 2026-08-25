
// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object 


// console.log(this);
// console.log(window);

// let a=12;       //part of global scope not global object
// const b=22;     //part of global scope not global object
// var c=20;   //part of global object
// console.log(this.c);
// console.log(this===window);  //true






// ****************************************************************


// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.

// ii: Strict Mode ("use strict")
// this will be undefined inside a function.


// "use strict"
// function greet(){
//     console.log(this);
// }
// greet();
// window.greet();  


// // "use strict"
// a=12;
// console.log(a);


// // "use strict"
// let obj={
//     name:10,
// }
// Object.freeze(obj);
// obj.name=30;
// console.log(obj);




// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this.name);
//     }
// }
// // obj.meet();     //calling meet() using object and so this keyword points to the object here.





// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }
// obj.greet();



// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);  //this keyword here inherits from the greet function whose this keyword points to the object
//         };                      //so ultimately this keyword of the arrow function here points to the object

//         ab();
//     }
// }

// obj.greet();





// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);     //object creation
// console.log(a);



// let greet = ()=>{
//     console.log(this);
// }
// greet();


// "use strict"
// let meet = function(){
//     console.log(this);
// }
// meet();

// window.meet();   //type error since let variable is used which is not a part of global object





