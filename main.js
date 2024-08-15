
// function sliderFirst
var index = 0, setTimeOut;

function currentSlide(self) {
  console.log(self);
  var indexSlide = self.getAttribute("data-slide");
  console.log(indexSlide);
  window.clearTimeout(setTimeOut);
  index = indexSlide;
  showFirstSlider();
}

function preSlides() {
  window.clearTimeout(setTimeOut);
  index = index - 2;
  showFirstSlider();
}

function plusSlides() {
  window.clearTimeout(setTimeOut);
  index = index++;
  showFirstSlider();
}

function showFirstSlider() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  index++;
  if (index > slides.length) {
    index = 1;
  }

  if (index < 1) {
    index = slides.length;
  }
  // console.log(222, index);
  // console.log(slides[index-1]);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].dataset.slide = i;
    dots[i].className = dots[i].className.replace('active', '');
  }

  slides[index-1].style.display = 'block';
  dots[index-1].className += ' active';
  setTimeOut = window.setTimeout(showFirstSlider, 5000);
}

showFirstSlider();





// function sliderSecond
var index = 0, setTimeOut;

// function currentSlide(self) {
//   console.log(self);
//   var indexSlide = self.getAttribute("data-slide");
//   console.log(indexSlide);
//   window.clearTimeout(setTimeOut);
//   index = indexSlide;
//   showSecondSlider();
// }

function preSlides() {
  window.clearTimeout(setTimeOut);
  index = index - 2;
  showSecondSlider();
}

function plusSlides() {
  window.clearTimeout(setTimeOut);
  index = index++;
  showSecondSlider();
}

function showSecondSlider() {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  index++;
  if (index > slides.length) {
    index = 1;
  }

  if (index < 1) {
    index = slides.length;
  }
  // console.log(222, index);
  // console.log(slides[index-1]);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].dataset.slide = i;
    dots[i].className = dots[i].className.replace('active', '');
  }

  slides[index-1].style.display = 'block';
  dots[index-1].className += ' active';
  setTimeOut = window.setTimeout(showSecondSlider, 1000);
}

showSecondSlider();