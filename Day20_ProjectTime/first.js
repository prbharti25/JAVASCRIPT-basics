
// const id = document.querySelector('#first');    //it can be used to select id, class etc. so need to mention
// id.innerHTML = "Hello Money";

// const id2 = document.querySelector('.header2');
// // console.log(id2);
// id2.style.backgroundColor = "green";


// -------------------- How to iterate over Node list(not exactly array)

// const obj = document.querySelectorAll('.header1')    //gives node list.

//1:  obj.forEach((val)=>{
//     console.log(val)
//     })


// 2: for(let val of obj)
// console.log(val)

// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";

//  ------------------- Convert NodeList into array
//  Array.from(obj)





// ****************************Accessing by TagName

// const obj = document.getElementsByTagName('h1');
// console.log(obj);
// let team = document.getElementsByTagName('li');

//----------- How to iterate over it
// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
//     console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })





// ****************************Accessing using Relationships

// const list = document.querySelector('li');
// console.log(list);
// console.log(list.parentElement);
// console.log(list.parentNode);


// const par = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.firstChild);
// console.log(par.firstElementChild);


// innerHTML: 
// textContent: 
// // innerText: 

// document.getElementById('first').innerHTML
// 'Hello Coder <strong>Army</strong>'

// document.getElementById('first').innerText
// 'Hello Coder Army'

// document.getElementById('first').textContent
// 'Hello Coder Army'
 


// document.getElementById('first').innerHTML
// 'Hello Coder <strong style="display: none;">Army</strong>'

// document.getElementById('first').innerText
// 'Hello Coder'

// document.getElementById('first').textContent
// 'Hello Coder Army'