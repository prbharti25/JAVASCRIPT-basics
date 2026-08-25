let obj=
{
    name:"Rohan",
    age:23,
    gender:"male",
    city:"Dhanabd",
};

obj.gender="Female";    //male --> Female
// console.log(obj.gender)
// console.log(Object.getOwnPropertyDescriptor(obj, "gender"))
// Object.defineProperty(obj, "gender",{
//     writable:false,
//     configurable:false,
// })
// obj.gender="Male";  //make no changes
// console.log(Object.getOwnPropertyDescriptor(obj, "gender"));

// -----------------------for in loop --> iterate over keys in an object
// for(let key in obj)
// console.log(key,": ", obj[key]);

// console.log(Object.keys(obj))   //returns an array of keys


let obj2=Object.create(obj);    //creates clone of obj
obj2.money=420;
obj2.id="roh";

// console.log(obj2, obj2.name)
// console.log(Object.keys(obj2));     //prints only money and id ->> ye khood ki hai (not inherited)

// for(let key in obj2)    //khood ki keys and inherited keys also --> printed
// console.log(key);
//  why not print all the keys since it has prototype Object.prototype which has keys like 
//tostring: fStrng() etc



// -----------for in loop is not used with array 
//-- arr is an object --> everything is stored in key-value pairs
// const arr=[1,2,3,4,5]
// arr.name="Rohit"    //name here acts as an index
//--  but index in array cannot be a string and FOR-IN loop doesn't give friction about it, and prints it as well

// for(let key in arr)  //FOR-IN simply access every keys
//     console.log(key);   //all the indeces are printed

// for(let index=0; index<arr.length; index++)     //using normal loop
//     console.log(index, arr[index])
    

// DAY-015----------------------------------------------------------------
// ------------------------FOR OF(iterable)--> LOOP
// const arr=[10,20,30,40,50]
// arr.name="Pushp";
// arr.age=22;
// for( let value of arr)
//     console.log(value);


let str="Pushp is good guy";
// for(let char of str)
//     console.log(char);

// dont use for of loop for iterating object
const obji=
{
    name:"shruti",
    age:20,
    gender:"female",
};

// for(let object of obji)
//     console.log(object);    //error: not iterable since it is not defined that how to go from name(not iterable) to age then gender like in array

// for(let value of Object.values(obji))   //Object.values() --> returns an Array
//     console.log(value);

// for(let value of Object.keys(obj))
//     console.log(value, obj[value]);



//----------------- for each loop-------------------
let arr1=[10,20,30,40,50,60];

// arr.forEach(function(num){
//     console.log(num);
// })

// arr1.forEach(function(num){
//     console.log(num);
// }) //or

// arr1.forEach((num)=>console.log(num));   //call back function
// arr.forEach( expects a call back function here )

// // arr.forEach(CallBackFunciton)
arr1.forEach((num,index,array)=>array[index]=num*3);
// {
//     array[index]=num%3;
// })
// console.log(arr1);  // it makes changes to the original array


function greet(num)
{
    console.log(num);
}

// arr1.forEach(greet);  //nothing is returned in arr.forEach()



let arr=[12,24,26,25,23,17,19,22]

// arr.filter(call back function)
// let result=arr.filter((num)=> {
//     return num%2==0;    //return true or false for the given num
// })                      //if true --> (yes) accepted
// console.log(result)  // arr.filter returns either true or false


// let result=arr.filter((num)=> num%2==0)
// console.log(result);


const students=[
    {name:"rohan", age:53, marks:17},
    {name:"mohan", age:13, marks:30},
    {name:"darshan", age:2, marks:70},
    {name:"rohit", age:20, marks:90},
    {name:"mohit", age:12, marks:40},
    {name:"shristi", age:21, marks:57},
]

// const result=students.filter((value)=>{
//     return value.marks>50; 
// } )

// const result=students.filter((value)=>value.marks>50)

// const result=students.filter((obj)=>obj.marks>50)

// const result=students.filter(({marks})=>marks>50);  //destructure
let temp = students.filter(person=> person.age>=20);
// console.log(temp);
// console.log(result);    




//----------------------- MAP(to modify the data into the result.... unlike filter where we can only filter out data)
const array=[1,2,4,5]
// const result=array.map((num, index, arrr) => arrr[index]=num*index);   //returned answer is stored in result, no change in original array
// console.log(result);   


const arrr=[1,2,3,4,5,6];
// //const result=arr.filter((num)=> num%2==0);  //even number is filtered out
// // const square=result.map((num)=> num*num);   //square of even
// // console.log(square);


const results=arrr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=> num/2);
console.log(results);
// .map().filter().map().... chaining can be done