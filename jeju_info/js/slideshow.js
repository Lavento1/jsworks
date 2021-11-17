// 이미지 선택
let slides = document.querySelectorAll(".slides img") ;
let current = 0;
let next = document.getElementById("next");
let prev = document.getElementById("prev");

showSlides(current);
next.onclick = nextSlide;
prev.onclick = prevSlide;


function showSlides(n){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function nextSlide(){
    if(current < slides.length - 1){
        current += 1;        
    }
    else{
        current = 0;
    }
    showSlides(current);
}

function prevSlide(){
    if(current <= 0){
        current = slides.length - 1;        
    }
    else{
        current -= 1;
    }
    showSlides(current);
}