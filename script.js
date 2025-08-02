// Main Swiper (e.g., homepage banner or news section)
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2800,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".teachers-section .swiper-button-next",
    prevEl: ".teachers-section .swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Pause autoplay on hover, resume on mouse leave
const teacherSlider = document.querySelector(".teacherSwiper");
teacherSlider.addEventListener("mouseenter", () => {
  teacherSwiper.autoplay.stop();
});
teacherSlider.addEventListener("mouseleave", () => {
  teacherSwiper.autoplay.start();
});
const mainSlider = document.querySelector(".mainSwiper");
mainSlider.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});
mainSlider.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
// Get the current URL
