// const arr= [1,2,3,5,6,'Pushp', 'Rohit', true, 2.35]
// console.log(arr.length, arr);
// console.log(typeof arr);
// console.log(arr[7]);    //cannot take -ve values
// console.log(typeof arr[7]);
// console.log(arr.at(-1))  //Latest: can take -ve indeces

// const newarray= arr;
// console.log(newarray, newarray==arr); //true
// const newarr = structuredClone(arr);    //creates copy with different reference
// console.log(newarr==arr);   //false
// console.log(newarr);

// arr.push(30);   //adds in the last
// arr.pop();  //pop from last
// console.log(arr);

// //add element at start
// arr.unshift(10);
// console.log(arr);

// //delete element fron start
// arr.shift()  //array shifts to the left
// console.log(arr);

// delete any specific
// delete arr[1];      //but space is still occupied by the deleted item <1 empty item>
// console.log(arr);

// console.log(arr.push('true', 6));    //arr.push() --> returns array length after adding elements
// // console.log(arr);
// console.log(arr.indexOf(6)); //first occurance
// console.log(arr.lastIndexOf(6));    //last occurance
// console.log(arr.includes(false));   //false 


// SLICE
// console.log(arr);
// console.log(typeof arr);
// console.log(arr.slice(5,8));    //to cut those parts --> gives a new array
// console.log(arr);    //no change in original array
// console.log(arr.splice(2,5));   //starting from 2nd index and upto 5 elements from there --> remove from original array
// // console.log(arr);   //after using splice original array has been changed!!
// splice portion is removed from original array

//  splice(starting_index, upto_elements_toDelete, Add_these_elements,,,)
// console.log(arr.splice(2,5,'new',10,false))     //new elements are added to the location where items have been removed
// console.log(arr);

// Array to string
// console.log(arr.toString);
// console.log(typeof arr.toString);
// console.log(typeof arr);

// console.log(arr.toString())     //no change in original array
// console.log(typeof arr.toString())
// console.log(arr.join("*"));     //it also converts into string inadditon to join with flexibility.

// //Concatenation
// let arr1=[1,3,4,5,10]
// let arr2=[4,6,8,3,2,true]
// let arr4=[23,545,76,'pushp']
// let arr3= arr1.concat(arr2,arr4);   //1D array
// console.log(arr3);

// arr1.push(arr2);
// console.log(arr1);    //arr2 is pushed completely as a single unit (accessed as 2D array)
// console.log(arr1[5][5]);    //now behaves as 2D array.


// //=======2D ARRAY============//
// let arr2d= [[1,2,3], [546,3,2,], [456,67,3]]
// console.log(arr2d,arr2d[1][1]);
// let newarr= arr2d.flat(1);  // 2d --> 1d array
// console.log(newarr);

// // =====3D ARRAY==============//
// let arr3d= [[2,3,[23,45]],[78,4,[0,0]], [1,2,[100,99]]]
// console.log(arr3d[2][2][0], arr3d);
// console.log(arr3d[2][2]);
// let newarr2= arr3d.flat(2);     //3d->1d array  : goes to 2 level to convert into 1D array
// console.log(newarr2);


// let abc=[1,2,3,4]    //this data is from backends
// console.log(Array.isArray(abc))  //to check what is its type if array??

let ac= new Array(12,35,34,65,2,'rohit');    //not recommended 
let ac2= new Array(12);    //12 is considered as size(when single value)
console.log(ac);
console.log(ac2);


