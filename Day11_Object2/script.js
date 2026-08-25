// let obj1=
// {
//     a1:1,
//     b:2,
// }

// let obj2= obj1;
// // shallow copy (copy by reference) change in the obj2 made changes in the original object.
// obj2.a1=10;
// console.log(obj2);


// // deep copy(obj1 refers to different object and obj3 refers to different(a copy) change in obj3 doesn't make any change to original object)
// let obj3=structuredClone(obj1)       //best practise --> creates a actual clone (deep copy always)
// obj3.a1=30;
// console.log(obj3,obj1);



// // Nested object (object inside object)
// const user=
// {
//     name: "Rohit",
//     balance: 420,
//     address:
//     {
//         pin:234139,
//         city:"Dhanbad",
//     }
// }
// console.log(user.address.pin);

// const user2= Object.assign({},user);    //creates a copy (shallow/deep)     Assign and spread operator works same while copying objects
// user2.name="Pushp";     //no change in user
// user2.address.city="Bokaro";  //changes to both user and user2
// console.log(user2, user);

// user2.address.pin=123446;   //nested object --> creates shallow copy
// user2.name="Pushp";     //deep copy for the normal objects without nested objects s

// console.log(user.name, user2.name)



// // Destructuring of an object
// let obj=
// {
//     name:"Rohit",
//     money: 1000,
//     balance:245, 
//     age:22,
//     Aadhaar:"134532"
// }

// const {name, balance,age}=obj;
// console.log(name, balance, age);
// const {name: fullName, balance: amount, age: birth}=obj;
// console.log(fullName, amount, birth);
// const {name, age,...obj1}=obj;    //Except name and age all other key value pairs get into obj1 from obj (rest operator--> (...) ...obj1)
// console.log(name, age);     //and name, age in another object
// console.log (obj1);



// const arr=[1,2,4,4,3,5];
// // const [first, second, , ,third]=arr;
// // const [first, second,fifth]=arr;
// const [first, second, ...arr2]=arr;
// console.log(first, second, arr2);

//destructuring nested objects
// let obj=
// {
//     name:"Rohit",
//     money: 1000,
//     balance:245, 
//     arr:[100,2,4.2],
//     Aadhaar:"134532",
//     address: 
//     {
//         pincode:123445,
//         city:"Dhanbad",
//         state:"Jharkhand"
//     }
// };

// const {name, money, address}=obj;
// console.log(name, money, address.pincode,address.state );

// const {address:{pincode,state}}=obj;
// console.log(pincode,state);

// const {arr:[first]}=obj;
// console.log(first);

// const {arr: array}= obj;
// const [first, ,third]=array;
// console.log(first, third);




// let user=
// {
//     name: "Rohit",
//     amount: 123,
//     greet: function()
//     {
//         return "Hello coder Army";
//     },
//     meet:function()
//     {
//         return "Let's meet someday, to make it memorable";   
//     }
// }

// console.log(user.greet());
// console.log(user.meet());




// Prototype chaining
// let obj=
// {
//     name:"Rohit",
//     amount:1234,
//     greet:function()
//     {
//         console.log("Hello!!");
//     },
// }
// console.log(obj.name, obj.amount); 
// console.log(obj.toString());    //i have never made that function but i am able to use that

// //obj.__proto__      //to get the prototypes

 

// let user1=
// {
//     name:"Pushp",
//     age:12,
// }

// let user2=
// {
//     amount:123,
//     money:123,
// }

// console.log(user2.amount, user2.money)
// console.log(user2.name)  //undefined --> how about accessing user1 key-value pairs using user2 

// user2.__proto__=user1;  //now user2 can use the properties of user1 (inherit properties)
// console.log(user2.name);



let arr=[1,2,3,4,5,6]
console.log(arr.__proto__==Array.prototype)
console.log(arr.__proto__.__proto__==Array.prototype.__proto__)
console.log(arr.__proto__.__proto__==Object.prototype)
console.log(arr.__proto__.__proto__.__proto__==null)
console.log(arr.__proto__.__proto__.__proto__==Object.prototype.prototype);


