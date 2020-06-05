var click = 0
var noseOfTheGoat = document.getElementById('noseOfTheGoat')
var MainBlock = document.getElementById('MainBlock')
var goat_rain = document.getElementById('goat_rain')
var goat_rain_grass = document.getElementById('goat_rain_grass')
var goat_rain_grassTwo = document.getElementById('goat_rain_grassTwo')
var footer = document.getElementById('footer')

noseOfTheGoat.addEventListener("click", function() {click++
   if (click % 2 === 1) {
    MainBlock.style.backgroundImage="url('./img/goat-zombie.jpeg')";
   }

   if (click % 2 === 0) {
    MainBlock.style.backgroundImage="url('./img/goat.jpeg')";
   }
})

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
 
 console.log("Едрен батон. Что-то пошло не так =(. пиши как баг")

