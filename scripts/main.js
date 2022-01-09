// ===== swiper js - slider
var swiperSlider = new Swiper(".swiper_slider", {
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//  ===== swiper js - products
var swiperProducts = new Swiper(".swiper_products", {
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  ===== swiper js - amazing products
var swiperAmazing = new Swiper(".amazing", {
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// ===== text overflow - title products
let titleProducts = document.querySelectorAll(".product_title a");
titleProducts.forEach((e) => {
  let text = e.textContent;
  if (text.length > 60) {
    e.innerHTML = "";
    e.innerHTML = text.substring(0, 60) + "...";
  }
});
