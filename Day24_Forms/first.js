const form = document.querySelector('form');

// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);
// })


// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//         console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// }) 

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('dblclick', (event)=>{
//     // console.log(event.target.value);
//     console.log("double click")
// })


// form.addEventListener('submit', (event)=>{
//     // console.log(event.target.value);
//     console.log("Form Submitted");
// })


// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     console.log("Button clicked!");
// });


// form.addEventListener('reset', (event)=>{
//     // console.log(event.target.value);
//     console.log("Form Reset");
// })
 



// ------------to get access on the datails submitted-----------

form.addEventListener('submit',(event)=>{

    event.preventDefault();     //to prevent the page from getting refreshed automatically
   
    const first = document.getElementById("first");
    console.log(first.value);

    const second = document.getElementById("second");
    console.log(second.value);

    const third = document.getElementById("third");
    console.log(third.value);

    
// FormData---
    const data = new FormData(form);

    for(let key of data.keys())
        console.log(key);

    for(let value of data.values())
        console.log(value);

    for(let [key,value] of data.entries())
    console.log(key,":", value);

    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));

    // stored in keys value pairs
 


    const result = document.getElementById('result');
    result.innerText = `${first.value} ${second.value} is a good Boy`;

    document.body.append(result);
})



