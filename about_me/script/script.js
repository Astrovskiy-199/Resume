var ButtonTop =document.getElementById("ButtonTop");
var count = 0
var count_of_IMG =0 
var image_viewBlock_button_left = document.getElementById("imageViewBlockButtonLeft")
var image_viewBlock_button_right = document.getElementById("imageViewBlockButtonRight")
var image_viewBlock = document.getElementById('image_viewBlock')

window.addEventListener('scroll', function() {
    if (pageYOffset > 1030) {
         ButtonTop.style.display="flex"; 
    }

    else {
        ButtonTop.style.display="none";
    }
    
  });

   var BigPhoto= document.getElementsByClassName('seventhBlockIconsFractionIcon');
    for( i = 0; i < BigPhoto.length; i++){ 
        BigPhoto[0].addEventListener('click', function() { count++
           
            
            if(count > 1) {
                image_viewBlock.style.display="flex" ; image_viewBlock.style.backgroundImage="url('../img/qa-course-one-small.jpg')";image_viewBlock_button_left.style.display="none"; count_of_IMG = 0; image_viewBlock_button_right.style.display="flex";
            }
            
        })

        BigPhoto[1].addEventListener('click', function() { count++
           
            
            if(count > 1) {
                image_viewBlock.style.display="flex" ; image_viewBlock.style.backgroundImage="url('../img/qa-course-two-small.jpg')"; image_viewBlock_button_right.style.display="flex";  image_viewBlock_button_left.style.display="flex";
            }
  
        })


        BigPhoto[2].addEventListener('click', function() { count++
           
            
            if(count > 1) {
                image_viewBlock.style.display="flex" ; image_viewBlock.style.backgroundImage="url('../img/qa-course-three-small.jpg')"; image_viewBlock_button_right.style.display="flex";  image_viewBlock_button_left.style.display="flex";
            }
  
        })

        BigPhoto[3].addEventListener('click', function() { count++
           
            
            if(count > 1) {
                image_viewBlock.style.display="flex" ; image_viewBlock.style.backgroundImage="url('../img/qa-course-forth-small.jpg')"; image_viewBlock_button_right.style.display="flex";  image_viewBlock_button_left.style.display="flex";
            }
  
        })

        BigPhoto[4].addEventListener('click', function() { count++
           
            
            if(count > 1) {
                image_viewBlock.style.display="flex" ; image_viewBlock.style.backgroundImage="url('../img/qa-course-fifth-small.jpg')"; image_viewBlock_button_right.style.display="none"; count_of_IMG = 4; image_viewBlock_button_left.style.display="flex";
            }
  
        })
    }

    

    image_viewBlock_button_left.addEventListener('click', function(){
        count_of_IMG--;
        if(count_of_IMG <= 0) {
            image_viewBlock_button_left.style.display="none"; image_viewBlock.style.backgroundImage="url('../img/qa-course-one-small.jpg')"; 
            
        }

        

        if(count_of_IMG === 1) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-two-small.jpg')"; image_viewBlock_button_right.style.display="flex";
            
        }

        if(count_of_IMG === 2) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-three-small.jpg')";; image_viewBlock_button_right.style.display="flex";
        }

        if(count_of_IMG === 3) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-forth-small.jpg')"; image_viewBlock_button_right.style.display="flex";
        }

        if(count_of_IMG === 4) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-fifth-small.jpg')"; 
        }
    })

        

    image_viewBlock_button_right.addEventListener('click', function(){
        count_of_IMG++
        if(count_of_IMG === 1) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-two-small.jpg')"; image_viewBlock_button_left.style.display="flex";
        }

        if(count_of_IMG === 2) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-three-small.jpg')"; image_viewBlock_button_left.style.display="flex";
        }

        if(count_of_IMG === 3) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-forth-small.jpg')"; image_viewBlock_button_left.style.display="flex";
        }

        if(count_of_IMG === 4) {
            image_viewBlock.style.backgroundImage="url('../img/qa-course-fifth-small.jpg')"; image_viewBlock_button_right.style.display="none";
        }

        if(count_of_IMG > 4) { 
            count_of_IMG = 0;
        }

    
       
       
        
    })

    var image_viewBlock_Close = document.getElementById("image_viewBlock_Close")


    image_viewBlock_Close.addEventListener("click", function() {
        image_viewBlock.style.display="none";
    })
