var click = 0
var MainBlock = document.getElementById('MainBlock')
var goat_rain = document.getElementById('goat_rain')
var goat_rain_grass = document.getElementById('goat_rain_grass')
var goat_rain_grassTwo = document.getElementById('goat_rain_grassTwo')
var footer = document.getElementById('footer')


footer.addEventListener("click", function() {click++
    if (click % 2 === 1) {
        goat_rain.style.display="flex";
        goat_rain_grassTwo.style.display="flex";
        goat_rain_grass.style.display="flex";
    }
 
    if (click % 2 === 0) {
     MainBlock.style.backgroundImage="url('./img/goat.jpeg')";
    }
 })


 console.log("Error Error")
