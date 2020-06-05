var numberOfClick = 0
var mobileMenuCount = 0
var mobileMenuButton = document.getElementById('mobileMenuButton')
var HomePage = document.getElementById('HomePage')
var AboutUs = document.getElementById('AboutUs')
var Contacts = document.getElementById('Contacts')
var Ourshop = document.getElementById('Ourshop')
var MainHeaderMenu = document.getElementById("MainHeaderMenu")
var closeMobileMenu = document.getElementById('closeMobileMenu')

var HomeMainBlock =document.getElementById("HomeMainBlock")
var AboutUsMainBlock =document.getElementById("AboutUsMainBlock")
var ContactUsMainBlock =document.getElementById("ContactUsMainBlock")
var OurShopMainBlock =document.getElementById("OurShopMainBlock")


var imgAboutUsDambl = document.getElementById("imgAboutUsDambl")
var imgAboutUsDamblBig = document.getElementById("imgAboutUsDamblBig");
var imgAboutUsGirl = document.getElementById("imgAboutUsGirl")
var imgAboutUsGirlBig = document.getElementById("imgAboutUsGirlBig")


var imgAboutUsStadium = document.getElementById("imgAboutUsStadium")
var imgAboutUsHall = document.getElementById("imgAboutUsHall")
var imgAboutUsHallTwo = document.getElementById("imgAboutUsHallTwo")
var imgAboutUsforest = document.getElementById("imgAboutUsforest")

var imgAboutUsStadiumBig = document.getElementById("imgAboutUsStadiumBig")
var imgAboutUsHallBig = document.getElementById("imgAboutUsHallBig")
var imgAboutUsHallTwoBig = document.getElementById("imgAboutUsHallTwoBig")
var imgAboutUsforestBig = document.getElementById("imgAboutUsforestBig")
var html = document.querySelector("html")


mobileMenuButton.addEventListener( "click", function() { mobileMenuCount++
    if(mobileMenuCount % 2 === 1) {
        MainHeaderMenu.style.marginLeft="-4%"; html.style.overflow="hidden";

    }

    if(mobileMenuCount % 2 === 0) {
        MainHeaderMenu.style.marginLeft="-124%"; html.style.overflow="scroll";

    }

} 
)

closeMobileMenu.addEventListener("click", function() { mobileMenuCount++
    if(mobileMenuCount % 2 === 0) {
        MainHeaderMenu.style.marginLeft="-124%";

    }
})


HomePage.addEventListener('click', function() {
    HomeMainBlock.style.display="flex";
    AboutUsMainBlock.style.display="none";
    ContactUsMainBlock.style.display="none";
    OurShopMainBlock.style.display="none";
    HomePage.style.color="yellow"; HomePage.style.textDecoration="underline";
    AboutUs.style.color="white"; AboutUs.style.textDecoration="none";
    Contacts.style.color="white"; Contacts.style.textDecoration="none";
    Ourshop.style.color="white"; Ourshop.style.textDecoration="none";
});

AboutUs.addEventListener('click', function() {
    HomeMainBlock.style.display="none";
    AboutUsMainBlock.style.display="flex";
    ContactUsMainBlock.style.display="none";
    OurShopMainBlock.style.display="none";
    HomePage.style.color="white"; HomePage.style.textDecoration="none";
    AboutUs.style.color="yellow"; AboutUs.style.textDecoration="underline";
    Contacts.style.color="white"; Contacts.style.textDecoration="none";
    Ourshop.style.color="white"; Ourshop.style.textDecoration="none";
});

Contacts.addEventListener('click', function() {
    HomeMainBlock.style.display="none";
    AboutUsMainBlock.style.display="none";
    ContactUsMainBlock.style.display="flex";
    OurShopMainBlock.style.display="none";

    HomePage.style.color="white"; HomePage.style.textDecoration="none";
    AboutUs.style.color="white"; AboutUs.style.textDecoration="none";
    Contacts.style.color="yellow"; Contacts.style.textDecoration="underline";
    Ourshop.style.color="white"; Ourshop.style.textDecoration="none";
});

Ourshop.addEventListener('click', function() {
    HomeMainBlock.style.display="none";
    AboutUsMainBlock.style.display="none";
    ContactUsMainBlock.style.display="none";
    OurShopMainBlock.style.display="grid";

    HomePage.style.color="white"; HomePage.style.textDecoration="none";
    AboutUs.style.color="white"; AboutUs.style.textDecoration="none";
    Contacts.style.color="white"; Contacts.style.textDecoration="none";
    Ourshop.style.color="yellow"; Ourshop.style.textDecoration="underline";
});





imgAboutUsDambl.addEventListener('click', function(){ numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsDamblBig.style.marginTop="100px"; imgAboutUsDamblBig.style.filter="Blur(0px)"; imgAboutUsDamblBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsDamblBig.style.marginTop="-2000px";  imgAboutUsDamblBig.style.filter="Blur(250px)";
    
}})

imgAboutUsDamblBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsDamblBig.style.marginTop="-2000px";  imgAboutUsDamblBig.style.filter="Blur(250px)"; 
}})



imgAboutUsGirl.addEventListener("click", function() { numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsGirlBig.style.marginTop="100px"; imgAboutUsGirlBig.style.filter="Blur(0px)"; imgAboutUsGirlBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsGirlBig.style.marginTop="-2000px";  imgAboutUsGirlBig.style.filter="Blur(250px)";
    
}}) 


imgAboutUsGirlBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsGirlBig.style.marginTop="-2000px";  imgAboutUsGirlBig.style.filter="Blur(250px)";
}}) 










imgAboutUsStadium.addEventListener("click", function() { numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsStadiumBig.style.marginTop="100px"; imgAboutUsStadiumBig.style.filter="Blur(0px)"; imgAboutUsStadiumBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsStadiumBig.style.marginTop="-2000px";  imgAboutUsStadiumBig.style.filter="Blur(250px)";
    
}}) 


imgAboutUsStadiumBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsStadiumBig.style.marginTop="-2000px";  imgAboutUsStadiumBig.style.filter="Blur(250px)";
}}) 









imgAboutUsHall.addEventListener("click", function() { numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsHallBig.style.marginTop="100px"; imgAboutUsHallBig.style.filter="Blur(0px)"; imgAboutUsHallBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsHallBig.style.marginTop="-2000px";  imgAboutUsHallBig.style.filter="Blur(250px)";
    
}}) 


imgAboutUsHallBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsHallBig.style.marginTop="-2000px"; imgAboutUsHallBig.style.filter="Blur(250px)";
}}) 







imgAboutUsHallTwo.addEventListener("click", function() { numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsHallTwoBig.style.marginTop="-50px"; imgAboutUsHallTwoBig.style.filter="Blur(0px)"; imgAboutUsHallTwoBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsHallTwoBig.style.marginTop="-2000px";  imgAboutUsHallTwoBig.style.filter="Blur(250px)";
    
}}) 


imgAboutUsHallTwoBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsHallTwoBig.style.marginTop="-2000px";  imgAboutUsHallTwoBig.style.filter="Blur(250px)";
}}) 







imgAboutUsforest.addEventListener("click", function() { numberOfClick++
    if (numberOfClick % 2 === 1) {
        imgAboutUsforestBig.style.marginTop="100px"; imgAboutUsforestBig.style.filter="Blur(0px)"; imgAboutUsforestBig.style.position="fixed";
}
    if (numberOfClick % 2 === 0) { 
        imgAboutUsforestBig.style.marginTop="-2000px";  imgAboutUsforestBig.style.filter="Blur(250px)";
    
}}) 


imgAboutUsforestBig.addEventListener("click", function() {numberOfClick++
    if (numberOfClick % 2 === 0)
    { 
        imgAboutUsforestBig.style.marginTop="-2000px";  imgAboutUsforestBig.style.filter="Blur(250px)";
}}) 




