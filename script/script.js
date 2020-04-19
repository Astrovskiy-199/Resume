var killBug = document.getElementById("bug")
var count =0

killBug.addEventListener("click", function() { count++
    if(count == 1) {
        killBug.style.backgroundImage="url('img/blood.png')"; killBug.style.width="400px"; killBug.style.height="250px"; killBug.style.backgroundSize="100%";
    }
});