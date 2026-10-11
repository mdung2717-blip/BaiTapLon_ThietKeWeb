const slides = document.querySelectorAll('.slide');
const arrows = document.querySelectorAll('.slider-arrow');
const hero = document.querySelector('.hero');

let currentIndex = 0;

function updateSlider(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });

  const activeSlide = slides[index];
  if (activeSlide) {
    const bgColor = activeSlide.dataset.bg || '#f2d66e';
    hero.style.background = bgColor;
  }
}

arrows.forEach((button) => {
  button.addEventListener('click', () => {
    const direction = button.classList.contains('left') ? -1 : 1;
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlider(currentIndex);
  });
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}, 4000);

const cartBadge = document.querySelector('.cart-badge');
const orderButtons = document.querySelectorAll('.card-footer button');

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const current = Number(cartBadge.textContent || '0');
    cartBadge.textContent = String(current + 1);
    button.textContent = 'Đã thêm';
    button.disabled = true;
    button.style.opacity = '0.8';
  });
});