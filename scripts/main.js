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

//  ===== swiper js - product_single
var swiperProductSingle = new Swiper(".product_single", {
  slidesPerView: 2,
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


// ===== click icon heart - favorites
let hearts = document.querySelectorAll(".favorites i");
hearts.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("far")){
      e.classList.remove("far");
      e.classList.add("fa");
    }else{
      e.classList.add("far");
      e.classList.remove("fa");
    }
  });
});



// ===== links myAccount page
let linksAccount = document.querySelectorAll(".links_account ul li");
let itemAccount = document.querySelectorAll(".item_account");

linksAccount.forEach((e) => {
  e.addEventListener("click", () => {
    let targetTab = e.getAttribute("data-target");
    disableLinks();
    disableItemAccount();
    e.classList.add("active");
    document.getElementById(`${targetTab}`).style.display = "block";
  });
});
const disableLinks = () => {
  linksAccount.forEach((e) => {
    e.classList.remove("active");
  }); 
}
const disableItemAccount = () => {
  itemAccount.forEach((e) => {
    e.style.display = "none";
  });
}