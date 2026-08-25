// <li>TS</li>  i want to create this using JS

// //------------------- Creating an element
// function attach(content, content2){
// const element = document.createElement('li');   //evrything here is an object
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML = content2;

// const parent = document.getElementById("root");
// // parent.appendChild(element);     //single statement can be added (in last)
// parent.append(element,element2);    //in append: we can add multiple statements (in last)
// };

// attach("exTS", "1st");
// attach("exReact", "2nd");
// attach("exNode", "3rd");





//----------------TextNode------------------(having no tags attached)    ex: ajsdnfkabd
// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.append(element); 
 




// -------------------Attribute Node-----------------------(ex: id, class etc)
// const element = document.createAttribute("id");
// element.value = "first";


// //---- access to first list(CN)
// // const curr_list = document.querySelector('li');  //pehle jo match ho gya condition se uska access le lega
// // curr_list.setAttributeNode(element);


// //------- access to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);


// //------- access attribute of a element
// const element  = document.getElementById("root");
// console.log(element.getAttribute("class"));
// element.setAttribute("custom", "20");
// element.setAttribute("class", "Rohan");
// element.removeAttribute("custom");





// //***********Add nodes to the DOM************
// const parent = document.getElementById("root");

// const element = document.createElement('li');
// element.innerHTML = "TS";
 
// // parent.prepend(element);    //sabse pehle attach hoga
// // parent.append(element);      //last me attach hoga

// const child2 = parent.children[1];   //to attach-in between
// // parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
// parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin", element);
// parent.insertAdjacentElement("afterend", element);




//---------- Delete node or element
const element = document.querySelector('li')

// const element=document.getElementById("root");
// const child=element.children[2];
element.remove();







