// let str1="hello coder Army\n"
// let str2="how are you\n"
// let str3=`what is going on??`
// console.log(str1, str2, str3);
// console.log(str3);


// let price=12346;
// console.log(`The price of the good is ${price}.`);

// string concatenation
let s1="Hello Cod";
let s2="er Army";
s3=s1+s2;
console.log(s3);
console.log(s3.length);


console.log("`hello coder`")
let message="'Today is Tuesday'. \n'Tomorrow is Wednesday'";
console.log(message);

// // Escape character: \  print the characters just after escape character as it is
// let message="Today is Tuesday. \n\\nTomorrow is Wednesday";
// console.log(message);

// let message="Today is Tuesday. \nTomorrow is Wednesday";
// console.log(message);
// console.log(message[4])
// console.log(message.charAt(4)) //same as above
// console.log(message.toLowerCase());     //returns a new string --> no change in original string
// // console.log(message); 
// console.log(message.toUpperCase());   //returns a new string  -->  no change in original string
// // console.log(message);


// let honda="I am Honda earlier known as Hero Honda"
// console.log(honda.indexOf("Hero")); //28
// console.log(honda.indexOf("hero"))  //-1
// console.log(honda.indexOf("Honda"));
// console.log(honda.lastIndexOf("Honda")); //33
// console.log(honda.includes("earlier"))  //true

// console.log(honda)

   //from left  // 012345 6789...
let newstr="pulsar hello pulsar"
// -12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1   (from right)
console.log(newstr.slice(0,10));  //slice can take negative indeces unlike substring
console.log(newstr.slice(-11,12));  // starting string, ending string
console.log(newstr.substring(0,4)) //substring and slice perform same operation(nearly).
console.log(newstr.substr(0, 11));

console.log(newstr.replace("pulsar", "hike"));
console.log(newstr.replaceAll("pulsar", "nike"));

let str11="  Money! Honey! Bunny! Funny!  ";
console.log(str11.length);
console.log(str11.split("! ")) //converted into array on the given basis

// console.log(str11.trim().length);   //starting and end spaces are trimmed


// // Latest way to create string
let latestString= new String("This is a new way to create string");   //using new keyword: memory is allocated in HEAP 
// (more space) (not in stack anymore) 
console.log(latestString);
console.log(typeof latestString);  //but type is object: since memory is allocated in HEAP (this->String is non primitive data type)

