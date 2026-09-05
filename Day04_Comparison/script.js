// comparison operator
// number to number

// let c1=11;
// let c2=11;
// console.log(c1>=c2); //true

// //By default string is converted to number in order to compare
// let num=10;
// let str="10";
// console.log(num===str);  //false: type and value are not same
 
// number to string comparison
// let b1=10;
// let str2="30";
// console.log(b1<str2); //true

// boolean comparison to number
let a1=1;
let str1=true;  //true: 1, false: 0
console.log(a1==str1);  //true

// === --> value and type comparison
let num1=12;
let num2=15;
console.log(num1===num2);    //false since value is different

console.log(null==undefined)  //true: null can only be equavalent to (==) undefined;
console.log(null===undefined) //false for all other cases


// console.log(null==0)  //false
// console.log(null<0) //false
// console.log(null>0) //false
// console.log(null<=0) //true
// console.log(null>=0) //true  null is converted to zero


// Undefined is converted to Not a Number NaN (in number datatype)
console.log(undefined==0)  //false
console.log(undefined<0) //false
console.log(undefined>0) //false
console.log(undefined<=0) //false
console.log(undefined>=0) // false

// console.log(NaN==NaN); //false

// let str1="pushp";
// let str2="Aman";  
// console.log(Number(str1)==Number(str2));    //false

// let abc1= 123;
// let abc2= "123";
// let abc3= 123;
// console.log(abc1==abc2==abc3); //false
// abc1==abc2  -->  true != 123

console.log(undefined!=null);   //false
console.log(null==undefined);  //true

// AND OR operator
let age=18;
let balance= 1200;
console.log  (! age>10);
console.log(age>17 && balance>1500);     //false
console.log(age>17 || balance>1500);     //true

// bitwise operator  bit by bit compare
console.log(4&5);
console.log(4|5);
console.log(14&11);
console.log(14|11);

console.log(5^7); //ex-or
console.log(5<<4) //3bits decimal ke baad(right) wale ko left shift krna hai 4 units
// 5*(2^4) 5 multiplied by 2 raise to 4; 
// // 101.00000000
// // 101000.00000

console.log(20>>3); //2bits decimal ke pehle(left) wale ko right shift krna hai 2 units
// comparison operators hi type conversion karenge