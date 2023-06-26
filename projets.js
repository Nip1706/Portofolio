const carousel = document.querySelector('.project-carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // Affiche un seul projet à la fois
  spaceBetween: 20, // Espacement entre les projets
  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button',
  },
});

prevButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: -320,
    behavior: 'smooth'
  });
});

nextButton.addEventListener('click', () => {
  carousel.scrollBy({
    left: 320,
    behavior: 'smooth'
  });
});

// Animation entres pages 

const loader = document.querySelector(".loader");

window.addEventListener('load', () => {
  loader.classList.add('fondu-out')
})


