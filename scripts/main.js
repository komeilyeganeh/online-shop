// ===== loading page
const preload = () => {
  document.querySelector(".loading").classList.add("fade");
  document.body.style.overflowX = "hidden"
  document.body.style.overflowY = "auto";
}
setInterval(preload, 2000);


// ===== Flickity js - slider
var flktySlider = new Flickity( '.carousel_slider', {
  // options
  pageDots: false,
  rightToLeft: true,
  autoPlay: 4000
});

// ===== Flickity js - amazing products
var flktyAmazing = new Flickity( '.amazing_carousel', {
  // options
  pageDots: false,
  rightToLeft: true,
  cellAlign: 'right'
});

// ===== Flickity js - popular products
var flktyPopular = new Flickity( '.popular_carousel', {
  // options
  pageDots: false,
  rightToLeft: true,
  cellAlign: 'right'
});

// ===== Flickity js - phone products
var flktyPhone = new Flickity( '.phone_carousel', {
  // options
  pageDots: false,
  rightToLeft: true,
  cellAlign: 'right'
});

// ===== Flickity js - single product page
var flktyProduct = new Flickity( '.single_carousel', {
  // options
  pageDots: false,
  rightToLeft: true,
  cellAlign: 'right'
});

// ===== Flickity js - related product
var flktyRelated = new Flickity( '.related_product_carousel', {
  // options
  pageDots: false,
  rightToLeft: true,
  cellAlign: 'right'
});

// ===== categories dropdown
let btnCategory = document.querySelector(".categories");
btnCategory.addEventListener("click", () => {
  btnCategory.classList.toggle("active");
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
    if (e.classList.contains("far")) {
      e.classList.remove("far");
      e.classList.add("fa");
    } else {
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
};
const disableItemAccount = () => {
  itemAccount.forEach((e) => {
    e.style.display = "none";
  });
};

// ===== fixed navbar
let navbar = document.querySelector(".header_bottom");
let sticky = navbar.offsetTop;

window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};


// ===== open/close menu in mobile
let btnBars = document.querySelector(".btn_bars_menu");
let menuMobile = document.querySelector(".nav ul");
btnBars.addEventListener("click", () => {
  if (menuMobile.classList.contains("active")){
    btnBars.classList.remove("fa-times");
    btnBars.classList.add("fa-bars");
    menuMobile.classList.remove("active");
  }else{
    btnBars.classList.remove("fa-bars");
    btnBars.classList.add("fa-times");
    menuMobile.classList.add("active");
  }
  
});
