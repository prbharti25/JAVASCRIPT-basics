// // ---------------REDUCE
// const arr = [10,20,30,40,50];

// // const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=>{      //accumulator --> receives the return part, current value -->stores current value each time
//     // console.log(acc,curr);
//     acc=acc+curr;
//     return acc;
// }, 0);   //Zero is the initial value of the acc

// // const result = arr.reduce((acc,curr)=>acc+curr, 0);
// console.log(result);




let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
//final result ek object ke form me dena hai like-
// orange:3
// apple:2

// acc = {  //acc is object here
// orange:2,
// apple:2,
// banana:1
// grapes:1}

// const result = arr.reduce((acc,curr)=>{     //initially acc is empty ({}--> empty object)
//     if(acc.hasOwnProperty(curr))    //is acc having the current property (like orange??)
//         acc[curr]++;
//     else
//       acc[curr]=1;

//     return acc;
// },{})


const result = arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
    return acc;
},{orange:2})
    
console.log(result);

