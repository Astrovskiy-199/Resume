var mainBlock = document.getElementById("mainBlock");
var loader = document.getElementById("loader");
var ButtonTop =document.getElementById("ButtonTop");
var ArticlesList  = document.getElementsByClassName('ArticlesList')
var ShowArticle = document.getElementsByClassName('ShowArticle')
var CloseArticleButton = document.getElementsByClassName('CloseArticleButton')
var ArticlesCount = 0



window.addEventListener('scroll', function() {
    if (pageYOffset > 1030) {
         ButtonTop.style.display="flex"; 
    }

    else {
        ButtonTop.style.display="none";
    }
    
  });



for(i=0; i < ArticlesList.length; i++) {  

}

for(q=0; q< ShowArticle.length; q++) {

}

for(n=0; n < CloseArticleButton.length; n++) { 

}



ArticlesList[0].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[0].style.display="flex";
 
   
    
     
})

CloseArticleButton[0].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[0].style.display="none";
     
})



ArticlesList[1].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[1].style.display="flex";
     
})

CloseArticleButton[1].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[1].style.display="none";
     
})



ArticlesList[2].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[2].style.display="flex";
     
})

CloseArticleButton[2].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[2].style.display="none";
     
})



ArticlesList[3].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[3].style.display="flex";
     
})

CloseArticleButton[3].addEventListener('click', function() { ArticlesCount = 1
    ShowArticle[3].style.display="none";
     
})















  


  