// let obj={}  //Empty object declared 
// obj.name="Rohit";
// obj.age=20;

// console.log(obj);

// console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// // writable = true --> value can be changed

// obj.name="Pushp";

// // If configurable (true) --> writable & enumerable value(true/false) can be changed
//configurale --> helps to change configuration

 
let obj={}
Object.defineProperty(obj, 'name',{
    value:"Rohit",
    writable:true,  //can be changed
    enumerable:true,
    configurable:false,
}) 

// obj.name="Mohit";   
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))


// Object.defineProperty(obj, 'name', {
//     writable:false,      // to prevent from accidental changes
// })
// obj.name="sonit";
// console.log(obj);   //no change since configurable is false



const obj1=
{
    name:"Pushp",
    age:21,
    account_number:230012,
};

Object.defineProperty(obj1, 'account_number',{
    writable:false,
})


const customer = {
    name: "Pushp",
    age: 21,
    account_number: 12345,
    balance: 403045,
};
// we cannot use const account_number since it is not a variable but key

// Make 'name' non-writable and non-configurable
Object.defineProperty(customer, "name", {
    writable: false,
    configurable: false,
})

customer.name="Aman";
// console.log(customer.name);

// // Make 'account_number' non-writable and non-configurable
// Object.defineProperty(customer, 'account_number', {
//     writable: false,
//     configurable: false,
// });



const customer1=
{
    name:"Aman",
    age:21,
    account_number:12345,
    balance:403045,
};

let customer2= Object.create(customer1);
customer2.city="Haridwar";
customer2.place="hamirpur";

Object.defineProperty(customer1, 'account_number', {
    enumerable:false,
})

// jiska bhi enumerable:true hoga keval usi ka access ho paaega, inherited walon ka bhi
for(let key in customer2)    //keval enumerable: true walo pe kaam karega for in loop to print key
    console.log(key);

// console.log(Object.getOwnPropertyDescriptor(customer,"name"))
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
Object.defineProperty(Object.prototype, "toString",{
    enumerable:true,
})
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));

// for(let key in customer2)   
// console.log(key);




