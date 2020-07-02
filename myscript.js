/* Home page portfolio user interface when hovering over images!*/

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})

/* Slideshow user interface for Fun Times*/
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("theSlides");
  var descriptions = document.getElementsByClassName("theDescriptions");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      descriptions[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  descriptions[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer=setTimeout(showSlides, 3000);
}

/* Slideshow user interface for Soccer*/
var aslideIndex = 1;
showtheSlides(aslideIndex);

function plustheSlides(n) {
  showtheSlides(aslideIndex += n);
}

function currentaSlide(n) {
  showtheSlides(aslideIndex = n);
}

function showtheSlides(n) {
  var i;
  var theslides = document.getElementsByClassName("aSlide");
  var minipics = document.getElementsByClassName("minipic");
  var captionText = document.getElementById("caption");
  if (n==undefined){n = ++aslideIndex}
  if (n > theslides.length) {aslideIndex = 1}
  if (n < 1) {aslideIndex = theslides.length}
  for (i = 0; i < theslides.length; i++) {
      theslides[i].style.display = "none";
  }
  for (i = 0; i < minipics.length; i++) {
    minipics[i].className = minipics[i].className.replace(" activ", "");
  }
  theslides[aslideIndex-1].style.display = "block";
  minipics[aslideIndex-1].className += " activ";
  captionText.innerHTML = minipics[aslideIndex-1].alt;
}

/* Functions for Family and Friends pages*/
function myFunction2(imgs) {
  var expandImg = document.getElementById("expandedImg2");
  var imgText = document.getElementById("imgtext2");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
