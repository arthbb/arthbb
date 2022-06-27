function mobileSlider() {
  if (window.innerWidth <= 767) {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1.15,
      spaceBetween: 16,
      loop: true,

    pagination: {
      el: '.swiper-pagination',
    },
    });

  }

  if (window.innerWidth > 767) {
    el.dataset.mobile = 'false';

    if (el.classList.contains('swiper-initialized')) {
      swiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
