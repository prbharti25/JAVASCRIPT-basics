// //Creating an object 
// const obj=
// {
//     // all keys are considered as string not variable
//     name:"Pushp",
//     account_details:420,
//     "gender":"Male",
//     age:21,
//     "account number": 122697,
//     // account number: 124234,   //no space if not using string
//     0:23,
//     1:252,
//     "undefined":30,
//     null:"Mohan",
// }

// console.log(typeof obj, obj);
// console.log(obj.name, obj.gender)   //Access: as like if array.length, length is here a key not a function
// console.log(obj["gender"], obj["age"]);  //or (access method)
// console.log(obj["account number"]);
// console.log(obj["0"]);
// console.log(obj[1]);    //as like array[index] only for numbers.

// const arr={  //internal implementation of arr
//     0:10,
//     1:20,
//     3:50,
//     length:3,
// };

// console.log(obj.undefined, obj["undefined"], obj[undefined]);
// console.log(obj.null, obj["null"]), obj[null];

//  backend: KEY --> "name", "gender" ...etc are stored as string


// METHOD 2 TO CREATE OBJECT   //property add, delete, modify 
// const person= new Object();
// console.log(person);    //empty object

// //add
// person.name='Rohit';
// person.age=23;
// person.gender="Male";
// console.log(person);

// //delete
// delete person.age;
// console.log(person);

// // update
// person.name="Pushp";
// console.log(person);


//third method to create object
// class people
// {
//     constructor(name, age, gender)
//     {
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }

// //  this. --> refers to per1, per2,...respectively
// let per1= new people("Mohan", 20, "Male");  //we called from here(function) so this.name --> refers to the calling function
// // if (this.name) is not used then we can use per1.name, per1.age, per1.gender

// let per2= new people("Shruti", 21, "Female");
// console.log(per1, per2);


let obj=
{
    name:"Rohit",
    age:30,
    gender:"Male",
    account_bal: 23,
};

// const arr=Object.values(obj);   //returna array
// const arr1=Object.keys(obj);    //returns array
// console.log(arr,arr1);

// let arr2= Object.entries(obj);  //key values both
// console.log(arr2);


// assign use case
const obj1={a:1, b:2};
const obj2={c:3, d:4};
const obj5={m:35, n:37};

const obj3= Object.assign({},obj1, obj2);   //combine:   {}target,  obj1, obj2--> source
// const obj3= Object.assign(obj2, obj1);    //obj2 is target(also) now so change in obj2 occurs
// console.log(obj3, obj2);
// obj3.a=99;  //no change in obj1 as obj3 creates a copy
// console.log(obj3,obj1.a);
// console.log(obj3, obj1, obj2);


// //SPREAD OPERATOR----------------
const obj4={...obj1,...obj2, ...obj5}   //to store all these in obj4 (combines)
console.log(obj4);


