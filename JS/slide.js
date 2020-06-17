if (screen.width <= 730){
    var slides = document.querySelectorAll(".split");
    var bullets = document.querySelectorAll(".bullet");
    function reset(){
        for (let i=0; i<slides.length; i++){
            slides[i].style.display = "none";
        }
    }
    
    function first(){
        reset();
        slides[0].style.display = "block";
        bullets[0].classList.add("bullet-hover");
        bullets[1].classList.remove("bullet-hover"); 
    }

    function second(){
        reset();
        slides[1].style.display = "block";
        bullets[1].classList.add("bullet-hover");
        bullets[0].classList.remove("bullet-hover");
    }
    first();
}