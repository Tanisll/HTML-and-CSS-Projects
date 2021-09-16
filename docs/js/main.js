// These functions open and close the contact form
function openForm() {
    document.getElementById("contactForm").style.display = "block";
}

function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex1 = 1;
showSlides1(slideIndex1);

// This function changes the slide when the left or right arrows are clicked
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// This function changes the slide when the dots are clicked
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}


function showSlides1(n) {
    var slides = document.getElementsByClassName("mySlides1"); // This takes all elements with the class name "mySlides1" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex1 = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex1 = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex1 - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex1 - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// Family Picture Modal Section //
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  // App Builder 9000 Modal Section //
function openModal2() {
    document.getElementById("myModal2").style.display = "block";
  }
  
  function closeModal2() {
    document.getElementById("myModal2").style.display = "none";
  }
  
  var slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo2");
    var captionText = document.getElementById("caption2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";
    dots[slideIndex2-1].className += " active";
    captionText.innerHTML = dots[slideIndex2-1].alt;
  }
  
  // File Transfer Modal Section //
function openModal4() {
document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
document.getElementById("myModal4").style.display = "none";
}

var slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
var i;
var slides = document.getElementsByClassName("mySlides4");
var dots = document.getElementsByClassName("demo4");
var captionText = document.getElementById("caption4");
if (n > slides.length) {slideIndex4 = 1}
if (n < 1) {slideIndex4 = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex4-1].style.display = "block";
dots[slideIndex4-1].className += " active";
captionText.innerHTML = dots[slideIndex4-1].alt;
}

// File Transfer Modal Section //
function openModal3() {
    document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
    document.getElementById("myModal3").style.display = "none";
}

var slideIndex3 = 1;
    showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo3");
    var captionText = document.getElementById("caption3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";
    dots[slideIndex3-1].className += " active";
    captionText.innerHTML = dots[slideIndex3-1].alt;
}
