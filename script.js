const slides = document.querySelectorAll('.banner-slide .slide, .hero.slider .slide');
const previousButton = document.querySelector('.slider-arrow.left');
const nextButton = document.querySelector('.slider-arrow.right');
const slideTrack = document.querySelector('.banner-slide .slide-track, .hero.slider .slider-track');

if (slides.length > 0) {
  let currentIndex = Array.from(slides).findIndex((slide) => slide.classList.contains('active'));
  if (currentIndex < 0) currentIndex = 0;

  function showSlide(index, direction = 1) {
    currentIndex = (index + slides.length) % slides.length;
    slideTrack?.classList.toggle('is-prev', direction < 0);
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === currentIndex);
    });
  }
  showSlide(currentIndex);
  previousButton?.addEventListener('click', () => showSlide(currentIndex - 1, -1));
  nextButton?.addEventListener('click', () => showSlide(currentIndex + 1, 1));

  if (slides.length > 1) {
    window.setInterval(() => showSlide(currentIndex + 1, 1), 4000);
  }
}

const cartBadge = document.querySelector('.cart-badge');
const orderButtons = document.querySelectorAll('.card-footer button');

if (cartBadge) {
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const current = Number(cartBadge.textContent || '0');
      cartBadge.textContent = String(current + 1);
      button.textContent = 'Đã thêm';
      button.disabled = true;
      button.style.opacity = '0.8';
    });
  });
}
