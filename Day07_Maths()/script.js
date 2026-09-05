// let num1=321;
// let num2=new Number(321);   //Memory allocation in HEAP --> Here everything is handled by making Object
// let num3=new Number(321);   //num2 and num3 stores the reference of two different number(321) located in the HEAP. 
// console.log(num1==num2);    //true --> num2 is of object type so compiler converts it into number type then compares it with num1
// console.log(num2==num3);    //false: stores reference which are different
// console.log(num1, typeof num1);
// console.log(num2,num3, typeof num2, typeof num3); 


// num=231.17;
// console.log(num.toFixed(4));    //upto 4 decimal places
// console.log(num.toPrecision(4));     //upto 4 digits precised 
// console.log(num.toExponential(2));
// console.log(typeof num.toString());
// console.log(num.valueOf());



// -----------------MATH---------------------
// console.log(Math.E);
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.SQRT2);

// console.log(Math.ceil(2.34))     //ceil gives upper value integer
// console.log(Math.floor(2.34))    //floor gives lower value integer
// console.log(Math.random())  // 0<= value <1
// console.log(Math.random()*6); //0 <= value <6
// console.log(Math.ceil(Math.random()*6));  // play-ludo (1-6)


// console.log(Math.floor(Math.random()*10)+1); //1-10   
// console.log(Math.ceil(Math.random()*10));    // from 0 to 10
// console.log(Math.floor(Math.random()*11+40));   //min=40 to max=50 give me a random number in between, 11? --> *(max-min+1) multiplier   
// console.log(Math.ceil(Math.random()*11+39));     //or method(not identical exactly)

// console.log(Math.floor(Math.random()*6+6));     //6-11
// Math.random() --> cannot be used to generate OTP since it is not random, there is some algorithm behind it that
// uses system clock to generate it. So a hacker can hack it and guess the number.  

