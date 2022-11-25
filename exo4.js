
 let temps = 3
 const timerElement = document.getElementById("timer")

 function diminuerTemps() {
   timerElement.innerText = temps
   temps--
 }

 setInterval(diminuerTemps, 1000)