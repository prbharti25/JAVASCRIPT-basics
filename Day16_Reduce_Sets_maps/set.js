// // let arr = [10,20,10,30,10]
// // set : unique value
// const set1 = new Set([10,20,30,40,10,30]);
// console.log(typeof set1);

// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("PUSHP");
// set1.add(30);
// console.log(set1.size)

// // delete
// set1.delete("PUSHP");
// console.log(set1);



// // ig:id
// const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));

// user_id.clear();    //empty
// console.log(user_id);



// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);  //from array to set
// // arr = [...set1];     //set to array (spread operator)
// console.log(arr,set1);


// // ------union of two set
let set1 = new Set([11,20,3,40,500]);
// let set2 = new Set([10,20,70,60,40]);

// let set3 = new Set([...set1,...set2]);
// console.log(set3);

// // intersection
// // filter: array
// // const result =  new Set([...set1].filter((num)=>set2/.has(num)));    //set
// const result =  [...set1].filter((num)=>set2.has(num));     //array
// console.log(result)


// //------------- Iterate over set

// // for of: iterator
// for(let value of set1)
//     console.log(value);

// // for each 
// set1.forEach((value)=>console.log(value));


