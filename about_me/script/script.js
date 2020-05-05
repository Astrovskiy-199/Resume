var ButtonTop =document.getElementById("ButtonTop");

window.addEventListener('scroll', function() {
    if (pageYOffset > 1030) {
         ButtonTop.style.display="flex"; 
    }

    else {
        ButtonTop.style.display="none";
    }
    
  });