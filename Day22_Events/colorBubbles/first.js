document.body.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    const x = e.clientX;
    const y = e.clientY;
    circle.style.left = `${x - 20}px`;  
    circle.style.top = `${y - 20}px`;   
  
   
    // const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
    // circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const color=`#${Math.floor(Math.random()*16777215).toString(16)}`;
    circle.style.backgroundColor=color;
    document.body.appendChild(circle); 
  

    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
    document.body.appendChild(circle);
  

    setTimeout(() => {
      circle.remove();
    }, 3000);
  });



// document.body.addEventListener("click", (event)=>{
  
//   const circle = document.createElement('div');   //div circle-> object
//   circle.className = 'circle';  //or using setAttribute("circle")
// // or circle.classList.add('circle')
//   circle.textContent="Hi";
  
//   const x = event.clientX;
//   const y = event.clientY;

//   circle.style.left = `${x-20}px`;   //circle{ position: absolute }
//   circle.style.top= `${y-20}px`;


//   // const color = ["red","pink", "blue", "orange", "green","purple", "white","yellow", "wheat"];
//   // circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

//   const color=`#${Math.floor(Math.random()*16777215).toString(16)}`;
//   circle.style.backgroundColor=color;
//   document.body.appendChild(circle);  //to attach inside body tag

//   setTimeout(()=>{  //to remove from script
//     circle.remove();
//   } ,5000)
// })
