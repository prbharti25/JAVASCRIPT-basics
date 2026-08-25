// callback function

function fetchuser(callback){
    console.log("Fetching the user Detail....");
    setTimeout(()=>{
        console.log("Data fetched successfully!");
        const obj = {
            name: "Pushp Raj Bharti",
            age: 20,
            city: "dhanbad"
        };
        // data fetched from backend ---^
        callback(obj);
        
    },2000)
}

function greet(obj){
    console.log(`Hello ${obj.name}.`);
}

function meet(obj){
    console.log(`Hello ${obj.city}, We will meet in Dhanbad.`);
}

function edit_name(obj){
    console.log(`Name edited to ${obj.name}.`)
}

function age(obj){
    console.log(`User age is ${obj.age}.`);
}

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(age);
fetchuser(edit_name);