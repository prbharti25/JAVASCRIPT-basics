
function timing(){
const timer = document.getElementById('root');
const now = new Date();
const IndianTime = now.toLocaleTimeString();
timer.innerHTML = IndianTime;
}

setInterval(timing,1000);


const timer = document.getElementById('root');  //since it was inaccessible when put inside timing so need to rewrite outside 
timer.style.color="red";
timer.style.fontSize = "150px";
timer.style.display = "flex";
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";   
// timer.style.backgroundColor="green";

