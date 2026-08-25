// const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
const original_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan" 
}
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    
   event.preventDefault();
//data stores information in key-value pairs

   // const answer = Array.from(data.values());    //converting data into array  
   
   // let result = 0;
   // for(let i=0;i<answer.length;i++)
   // { if(answer[i]===original_answer[i])
   //      result++;
   // }
   // console.log(result);

   
   let result = 0
   for(let [key,value] of data.entries())
   {
    if(value===original_answer[key])
        result++;
   }

   const out = document.getElementById('out');
   out.innerText = `${result} out of 5 is correct`;

   // document.getElementById('container').append(out);  //since 'out' is already a div container so text goes there in its inner text.

   form.reset();

})



// project : To create a quiz where questions will be selected dynamically from array any 5 questions is selected randomly and displayed to user and user will select the answer and submit and we will show the result.


