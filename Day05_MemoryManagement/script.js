// let a=10;
// let b=a;
// b=30;    //no change in a(immuatable)
// console.log(b);
// b="hello";
// console.log(b);
// console.log(a);


// primitive data type: Immutable (in js) (in Stack)
// Non primitive data type: Mutable (in heap)

// let obj1=
// {
//     id:30,
//     name:"pushp",
//     id2:77,
//     name2:'mohan',
// };

// let obj2=obj1;
// console.log(obj2);
// obj2.id2=69;     //change in obj2 as well as obj1; (mutable)
// console.log(obj2);
// console.log(obj1);

// let num='23456789876543457876543234567876543234567';
// console.log(Number(num));

// const num3=10;
// // num3=20;    //Error: we cannot reassign values to const type data;
// console.log(num3);
     
 
const constOBJ=
{
    id:10,
    balance:200,
}

constOBJ.id=11;   //it is allowed as we are not making any change to (STACK) const obj (since it stores address for the object in HEAP)
console.log(constOBJ);

let letOBJ=
{
    id:30,
    balance:123,
}

constOBJ=letOBJ;  //now this is not possible as we are trying to change the address of the const constOBJ
// console.log(constOBJ);  //error

// letOBJ=constOBJ;
// console.log(letOBJ); 