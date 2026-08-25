document.querySelector('button').addEventListener('click',()=>{

    const place = document.getElementById('location').value;
    
    function updateTemp(data){
       const element = document.getElementById('weatherInfo');
       //    element.innerHTML = `
       //     Location: ${data.location.name}, ${data.location.region}<br>
       //     Today's Temperature: ${data.current.temp_c} °C
       //     `;

       element.innerHTML = "";
       const para1 = document.createElement('p');
       para1.textContent = `Location: ${data.location.name}, ${data.location.region}`
       const para2 = document.createElement('p');
       para2.textContent = `Today's Temperature: ${data.current.temp_c} °C`

       element.appendChild(para1);
       element.appendChild(para2);
    }

    const promises = fetch(`https://api.weatherapi.com/v1/current.json?key=66dff1b45470477e89145409260303&q=${place}&aqi=yes`)
    
    promises
    .then((response)=>response.json())
    .then(data=>updateTemp(data))

}) 