const burger = document.querySelector('.burger');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.side-menu__close');
const menuLinks = document.querySelectorAll('.side-menu__nav a');

function openMenu() {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

burger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const reviewsTrack = document.querySelector('.reviews__track');
const reviewsPrev = document.querySelector('.reviews__arrow--prev');
const reviewsNext = document.querySelector('.reviews__arrow--next');

if (reviewsTrack && reviewsPrev && reviewsNext) {
  const cardWidth = 193;
  const gap = 50;
  const visibleCards = 3;
  const totalCards = reviewsTrack.children.length;
  const maxIndex = totalCards - visibleCards;

  let currentIndex = 0;

  function updateReviewsSlider() {
    const offset = currentIndex * (cardWidth + gap);
    reviewsTrack.style.transform = `translateX(-${offset}px)`;
  }

  reviewsNext.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex += visibleCards;
    } else {
      currentIndex = 0;
    }

    updateReviewsSlider();
  });

  reviewsPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= visibleCards;
    } else {
      currentIndex = maxIndex;
    }

    updateReviewsSlider();
  });
}
const certificatesTrack = document.querySelector('.certificates__track');
const certificatesPrev = document.querySelector('.certificates__arrow--prev');
const certificatesNext = document.querySelector('.certificates__arrow--next');

if (certificatesTrack && certificatesPrev && certificatesNext) {
  const cardWidth = 193;
  const gap = 50;
  const visibleCards = 3;
  const totalCards = certificatesTrack.children.length;
  const maxIndex = totalCards - visibleCards;

  let currentIndex = 0;

  function updateCertificatesSlider() {
    const offset = currentIndex * (cardWidth + gap);
    certificatesTrack.style.transform = `translateX(-${offset}px)`;
  }

  certificatesNext.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex += visibleCards;
    } else {
      currentIndex = 0;
    }

    updateCertificatesSlider();
  });

  certificatesPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= visibleCards;
    } else {
      currentIndex = maxIndex;
    }

    updateCertificatesSlider();
  });
}