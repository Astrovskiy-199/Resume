var ButtonTop = document.getElementById("ButtonTop");
var countCharity = 0
var count_of_IMG = 0
var image_viewBlock_button_left = document.getElementById("imageViewBlockButtonLeft")
var image_viewBlock_button_right = document.getElementById("imageViewBlockButtonRight")
var image_viewBlock = document.getElementById('image_viewBlock')

window.addEventListener('scroll', function() {
    if (pageYOffset > 1030) {
        ButtonTop.style.display = "flex";
    } else {
        ButtonTop.style.display = "none";
    }

});

var dinophoto = document.getElementsByClassName('dinophoto')
for (i = 0; i < dinophoto.length; i++) 
    dinophoto[0].addEventListener('click', function() {
        count_of_IMG = 5
        if (count_of_IMG === 5) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoThree.jpg')";
            image_viewBlock_button_left.style.display = "none";
            console.log(count_of_IMG);
            image_viewBlock_button_right.style.display = "flex";

        }




    });

    dinophoto[1].addEventListener('click', function() {
        count_of_IMG = 6
        if (count_of_IMG === 6) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoThree.jpg')";
            image_viewBlock_button_left.style.display = "flex";
            console.log(count_of_IMG);
            image_viewBlock_button_right.style.display = "flex";

        }




    });


    dinophoto[2].addEventListener('click', function() {
        count_of_IMG = 7
        if (count_of_IMG === 7) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoOne.jpg')";
            image_viewBlock_button_left.style.display = "flex";
            console.log(count_of_IMG);
            image_viewBlock_button_right.style.display = "flex";

        }


    });


    dinophoto[3].addEventListener('click', function() {
        count_of_IMG = 8
        if (count_of_IMG === 8) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoFourth.jpg')";
            image_viewBlock.style.backgroundSize="90%";
            image_viewBlock_button_left.style.display = "flex";
            console.log(count_of_IMG);
            image_viewBlock_button_right.style.display = "none";

        }


    });







var BigPhoto = document.getElementsByClassName('seventhBlockIconsFractionIcon');
for (i = 0; i < BigPhoto.length; i++); 
    BigPhoto[0].addEventListener('click', function() {
        count_of_IMG = 0


        if (count_of_IMG === 0) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/qa-course-one-small.jpg')";
            image_viewBlock_button_left.style.display = "none";
            count_of_IMG = 0;
            image_viewBlock_button_right.style.display = "flex";
        }

    })

    BigPhoto[1].addEventListener('click', function() {
        count_of_IMG = 1


        if (count_of_IMG === 1) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/qa-course-two-small.jpg')";
            image_viewBlock_button_right.style.display = "flex";
            image_viewBlock_button_left.style.display = "flex";
        }

    })


    BigPhoto[2].addEventListener('click', function() {
        count_of_IMG = 2


        if (count_of_IMG === 2) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/qa-course-three-small.jpg')";
            image_viewBlock_button_right.style.display = "flex";
            image_viewBlock_button_left.style.display = "flex";
        }

    })

    BigPhoto[3].addEventListener('click', function() {
        count_of_IMG = 3


        if (count_of_IMG === 3) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/qa-course-forth-small.jpg')";
            image_viewBlock_button_right.style.display = "flex";
            image_viewBlock_button_left.style.display = "flex";
        }

    })

    BigPhoto[4].addEventListener('click', function() {
        count_of_IMG = 4


        if (count_of_IMG === 4) {
            image_viewBlock.style.display = "flex";
            image_viewBlock.style.backgroundImage = "url('../img/qa-course-fifth-small.jpg')";
            image_viewBlock_button_right.style.display = "none";
            count_of_IMG = 4;
            image_viewBlock_button_left.style.display = "flex";
        }

    })


var hobbieIMG = document.getElementsByClassName('ninthBlockPoint');
for(i=0; i < hobbieIMG.length; i++); 

hobbieIMG[0].addEventListener(('click'), function() { count_of_IMG = 9;
    if(count_of_IMG === 9) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_0996.JPG')";
    image_viewBlock.style.backgroundPosition="center";
}
})

hobbieIMG[1].addEventListener(('click'), function() { count_of_IMG = 10;
    if(count_of_IMG === 10) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_1003.JPG')";
    image_viewBlock.style.backgroundPosition="center";
}
})

hobbieIMG[2].addEventListener(('click'), function() { count_of_IMG = 11;
    if(count_of_IMG === 11) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_20180512_144633_536.jpg')";
    image_viewBlock.style.backgroundPositionY="-300px"
    
}
})

hobbieIMG[3].addEventListener(('click'), function() { count_of_IMG = 12;
    if(count_of_IMG === 12) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_3701.JPG')";
    image_viewBlock.style.backgroundPosition="center";
}
})

hobbieIMG[4].addEventListener(('click'), function() { count_of_IMG = 13;
    if(count_of_IMG === 13) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_20191222_183418.jpg')";
    image_viewBlock.style.backgroundPosition="center";
}
})


hobbieIMG[5].addEventListener(('click'), function() { count_of_IMG = 14;
    if(count_of_IMG === 14) {
    image_viewBlock.style.display = "flex";
    image_viewBlock.style.backgroundImage = "url('../img/IMG_20180412_183831.jpg')";
    image_viewBlock.style.backgroundPosition="center";
}
})









image_viewBlock_button_left.addEventListener('click', function() {
    count_of_IMG--;
    if (count_of_IMG <= 0) {
        image_viewBlock_button_left.style.display = "none";
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-one-small.jpg')";

    }




    if (count_of_IMG === 1) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-two-small.jpg')";
        image_viewBlock_button_right.style.display = "flex";

    }

    if (count_of_IMG === 2) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-three-small.jpg')";;
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 3) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-forth-small.jpg')";
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 4) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-fifth-small.jpg')";
    }

    if (count_of_IMG === 5) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoThree.jpg')";
        image_viewBlock_button_left.style.display = "none";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }


    if (count_of_IMG === 6) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoTwo.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 7) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoOne.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 8) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoFourth.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "none";
    }

    if(count_of_IMG === 9) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_0996.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "none";
        image_viewBlock_button_right.style.display = "flex";
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 10) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_1003.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        
    }

    if(count_of_IMG === 11) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_20180512_144633_536.jpg')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        image_viewBlock.style.backgroundPositionY="-300px"
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 12) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_3701.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        
    }

    if(count_of_IMG === 13) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_20191222_183418.jpg')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 14) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_0996.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "none";
        
    }

})



image_viewBlock_button_right.addEventListener('click', function() {
    count_of_IMG++;
    console.log(count_of_IMG);


    if (count_of_IMG === 1) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-two-small.jpg')";
        image_viewBlock_button_left.style.display = "flex";
    }

    if (count_of_IMG === 2) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-three-small.jpg')";
        image_viewBlock_button_left.style.display = "flex";
    }

    if (count_of_IMG === 3) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-forth-small.jpg')";
        image_viewBlock_button_left.style.display = "flex";
    }

    if (count_of_IMG === 4) {
        image_viewBlock.style.backgroundImage = "url('../img/qa-course-fifth-small.jpg')";
        image_viewBlock_button_right.style.display = "none";
    }

    if (count_of_IMG === 5) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoTwo.jpg')";
        image_viewBlock_button_left.style.display = "none";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 6) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoTwo.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 7) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoOne.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "flex";
    }

    if (count_of_IMG === 8) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/bigPhotoDinoFourth.jpg')";
        image_viewBlock_button_left.style.display = "flex";
        console.log(count_of_IMG);
        image_viewBlock_button_right.style.display = "none";
    }

    if(count_of_IMG === 9) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_0996.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "none";
        image_viewBlock_button_right.style.display = "flex";
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 10) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_1003.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        
    }

    if(count_of_IMG === 11) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_20180512_144633_536.jpg')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        image_viewBlock.style.backgroundPositionY="-300px"
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 12) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_3701.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        
    }

    if(count_of_IMG === 13) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_20191222_183418.jpg')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "flex";
        console.log(count_of_IMG);
    }

    if(count_of_IMG === 14) {
        image_viewBlock.style.display = "flex";
        image_viewBlock.style.backgroundImage = "url('../img/IMG_0996.JPG')";
        image_viewBlock.style.backgroundPosition="center";
        image_viewBlock_button_left.style.display = "flex";
        image_viewBlock_button_right.style.display = "none";
        
    }




})

var image_viewBlock_Close = document.getElementById("image_viewBlock_Close")


image_viewBlock_Close.addEventListener("click", function() {
    image_viewBlock.style.display = "none";
})