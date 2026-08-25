const d=new Date();
// console.log(d);

// console.log(d.toDateString());
// console.log(d.toString());
// console.log(d.toISOString());

// console.log(d, typeof d); //SYSTEM CLOCK
// // JAN 1 1970, 12:00AM -->  40000millisecond from this date
// const d2=new Date(2000);    //2 sec
// console.log(d2);
// // Digital format : time: when it was build

// console.log(d.getDate());
// console.log(d.getDay()) 
// //sun0 mon1 tue2 wed3 thurs4 fri5 sat6
// //month : also in n number   JAN0 FEB2 MARCH3...
// console.log(d.getMonth());
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// //  milliseconds: to compare cases
const now=Date.now();  //from 1 JAN 1970
// console.log(now); 
console.log(d.getTime());  //in milliseconds


// // we can assign date using string
// const d=new Date("2022-03-22T10:12:24"); 
// //in String: here jan1 feb2 march3....
// //T: time --> hrs. min. sec.
// console.log(d.toDateString());
// const date=new Date(2024,4,23,12,45,12,123435);//when using number: jan0 feb1 march3 april4 may5....
// year month day hrs  min sec millisec

// console.log(d,"     ",date);
// console.log(d.toString());


// const d=new Date()
// d.setDate(22)
// d.setMonth(11)
// d.setFullYear(2021);
// console.log(d.toString())
// console.log(d.toLocaleDateString())


// // Date calculation
// const date1=new Date()
// const date2=new Date("2025-04-11")
// console.log(date2-date1) //in milliseconds
// console.log(date2>date1) 


// Count down Timer
// Days , Hour, Minutes, Seconds
// const date1= new Date();    //current date
// const date2=new Date("2026-02-06T00:00:00")     //date to be calculated(coming future)

// const date=date2-date1; //milliseconds
// // console.log(date);

// // const days=(date/(1000*60*60*24));
// // console.log(days);

// const days= Math.floor(date/(1000*60*60*24));
// const hour=Math.floor((date/(1000*60*60))%24);
// const min=Math.floor((date/(1000*60))%60);
// const sec=Math.floor((date/(1000))%60);
// // console.log(`Days:${days}, Hours:${hour}, Minutes:${min}, Seconds:${sec}`)

// console.log(`Olympic CountDownTime: Days:${days}  Hours:${hour}  Minutes:${min}  Seconds:${sec}`);
