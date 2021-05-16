/*

* Code by Hamza
* 12 May, 2021

*/

///////////////////////////////////////////
// Navigation
///////////////////////////////////////////

// Elements
const btnToggler = document.querySelector(".nav__toggler");
const listMenu = document.querySelector(".nav__list");
const navItems = document.querySelectorAll(".nav__item");

// Functions
const toggleMenu = function () {
  this.classList.toggle("active");
  listMenu.classList.toggle("active");
};

// Event listeners
btnToggler.addEventListener("click", toggleMenu);
navItems.forEach((item) => item.addEventListener("click", toggleMenu));

///////////////////////////////////////////
// Navigation End
///////////////////////////////////////////
const runSwiper = function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
runSwiper();
