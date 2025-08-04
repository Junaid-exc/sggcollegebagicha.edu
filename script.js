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
let registerButton = document.querySelector('.register');
let nameinput = document.querySelector('.nameInput');
registerButton.addEventListener('click',()=>{
  alert('You are Gay, ' + nameinput.value + '!');
})

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
// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileToggle = document.createElement('div');
  mobileToggle.className = 'mobile-menu-toggle';
  mobileToggle.innerHTML = `
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  document.body.appendChild(mobileToggle);

  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');
  
  // Toggle mobile menu
  mobileToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Dropdown toggle functionality
  document.querySelectorAll('.dropdown > .fac, .dropdown-sub').forEach(item => {
    item.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) { // Only for mobile
        e.preventDefault();
        e.stopPropagation();
        
        const parent = this.parentElement;
        parent.classList.toggle('active');
        
        if (parent.classList.contains('dropdown')) {
          const menu = parent.querySelector('.dropdown-menu');
          menu.classList.toggle('active');
        } else if (parent.classList.contains('dropdown-sub')) {
          const submenu = parent.querySelector('.submenu');
          submenu.classList.toggle('active');
        }
      }
    });
  });
});