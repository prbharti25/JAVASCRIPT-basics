// IF-ELSE
// let age=31;
// if(age>=18)
// console.log("Eligible for vote: Please cast your Vote");

// else
// console.log("Not Eligible for vote");
 

// let age=23;
// if(age<18)
// console.log("Kid");

// else if(age>45)
// console.log("Old")

// else
// console.log("young"); 


// console.log(new Date().getDay());   //prints day as index form --> 0(sun)-6(sat)

// Multiple conditional Switch(strict comparison(===))
// switch(new Date().getDay())
// {
//     case 0:
//         console.log("SUNDAY");
//         break;
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//         break;
//     default:
//         console.log("Not a valid day!!");
// }



// LOOP----------------
// for(let i=0; i<5; i++)
// console.log("Hello Coder Army");

// Sum of first n natural numbers
// as the value of variable changes, new memory allocation happens each time --> time taking
// and so C++ is way faster than JS

// let sum=0;
// for(let i=1; i<=10; i++)
// sum=sum+i;
// console.log(sum);


// Nested for loop
for(let i=0; i<6; i++)
{
    let string = "";
    for(let i=2; i<=5; i++){
        string+=i;
    }
    console.log(string);
}




// while loop
// let i=1;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }


// let arr=[1.12,2.00,3,40,5,26,75,18,91]
// for(let i=0; i<arr.length; i++)
//     console.log(arr[i]);


//DO-WHILE loop
// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10);



const obj=
{
    name:"Pushp",
    age: 30,
    amount: 202,
    city:"Dhanbad",
    0:12
};
// console.log(obj["name"], obj.name, obj[0], obj["0"]);

const a=Object.keys(obj);
const b=Object.values(obj);
console.log(a,b)

const key=Object.keys(obj);     //returns array
// console.log(key);   //key: [ '0', 'name', 'age', 'amount', 'city' ]
for(let i=0; i<key.length; i++)
{
    console.log(obj[key[i]])
}


