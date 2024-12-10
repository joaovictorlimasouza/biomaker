const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;
const totalImages = images.length;

function updateCarousel() {
  const translateX = -currentIndex * carouselSlide.parentElement.offsetWidth;
  carouselSlide.style.transform = `translateX(${translateX}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
});

// Ajusta o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);
