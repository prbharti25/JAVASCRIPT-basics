const constOBJ=
{
    id:10,
    balance:200,
}

constOBJ.id=11;   //it is allowed as we are not making any change to (STACK) const obj (since it stores address for the object(heap) in STACK)
console.log(constOBJ);

let letOBJ=
{
    id:30,
    balance:123,
}

// constOBJ=letOBJ;  //now this is not possible as we are trying to change the address of the const constOBJ
// console.log(constOBJ);  //error

letOBJ=constOBJ;