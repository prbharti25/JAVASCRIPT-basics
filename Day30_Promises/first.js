// Callbackhell

// async task
// weather: 

// this is an object
const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=66dff1b45470477e89145409260303&q=Dhanbad&aqi=yes`)
// console.log(Promises)    //Promise {<pending>} since the data is not fetched yet

// const pro1 = Promises.then((response)=>{
//     // const pro2 = response.json();   //body 

//     // pro2.then((data)=>{
//     //     console.log(data);
//     // })
//     return response.json();
// })

 
// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))

fetch(`https://api.weatherapi.com/v1/current.json?key=66dff1b45470477e89145409260303&q=Dhanbad&aqi=yes`)
.then(response=>response.json())    //body
.then(data=>console.log(data.current.temp_c))
.catch(error=>console.log(error));


// Promises.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })


// promises =>pending, resolve, reject
