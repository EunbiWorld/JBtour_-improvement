const slideContainer = document.querySelector('.slide-container');
const slides = slideContainer.querySelectorAll('img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;

function slide() {
  slideContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function nextSlide() {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  slide();
}

function prevSlide() {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  slide();
}

let autoSlide = setInterval(() => {
  nextSlide();
}, 3000);

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(() => {
    nextSlide();
  }, 3000);
});
