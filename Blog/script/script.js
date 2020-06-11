var mainBlock = document.getElementById("mainBlock");
var loader = document.getElementById("loader");
var ButtonTop =document.getElementById("ButtonTop");
var ShowImageBlock = document.getElementById("ShowImageBlock");
var ShowImageBlockClose = document.getElementById('ShowImageBlockClose')
var count_of_IMG = 0;

window.addEventListener('scroll', function() {
    if (pageYOffset > 1030) {
         ButtonTop.style.display="flex"; 
    }

    else {
        ButtonTop.style.display="none";
    }
    
  });

var ShowImdByClick = document.getElementsByClassName('ExampleBlockImg'); 
for(i=0; i < ShowImdByClick.length; i++); 
ShowImdByClick[0].addEventListener('click', function() {
    ShowImageBlock.style.display="flex";
    ShowImageBlock.style.backgroundImage="url(../skills/img/TestCase.jpg)";

} ) ;

ShowImdByClick[1].addEventListener('click', function() {
    ShowImageBlock.style.display="flex";
    ShowImageBlock.style.backgroundImage="url(../skills/img/TestReport.jpg)";

} ) ;

ShowImdByClick[2].addEventListener('click', function() {
    ShowImageBlock.style.display="flex";
    ShowImageBlock.style.backgroundImage="url(../skills/img/estimation.jpg)";

} ) 




ShowImageBlockClose.addEventListener('click', function() {
    ShowImageBlock.style.display="none";
})




  


  