import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { SideBar } from "./sidebar.js";

//  Back To Top

const backToTopBtn = document.getElementById("back-to-top");
let isVisible = false;
let disabled = false;

const cleanUpAnimation = () => {
  if (disabled) return;
  backToTopBtn.classList.remove("back-to-top-show");
  backToTopBtn.classList.remove("back-to-top-hide");
  isVisible = false;
  disabled = false;
  backToTopBtn.removeEventListener("animationend", cleanUpAnimation); // clean up listener
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    if (!isVisible) {
      backToTopBtn.classList.remove("back-to-top-hide");
      backToTopBtn.classList.add("back-to-top-show");
      isVisible = true;
      disabled = false;
    }
  } else {
    if (isVisible) {
      backToTopBtn.classList.remove("back-to-top-show");
      backToTopBtn.classList.add("back-to-top-hide");
      disabled = false;
      backToTopBtn.addEventListener("animationend", cleanUpAnimation);
    }
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// End Back To Top

new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".swiper-box", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-box-next",
    prevEl: ".swiper-box-prev",
  },
  breakpoints: {
    // When window width is >= 680px
    680: {
      slidesPerView: 1,
    },
    // When window width is >= 1064px
    1024: {
      slidesPerView: 4,
    },
  },
});

new Swiper(".swiper-jackpot", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  navigation: {
    nextEl: ".jackpot-next",
    prevEl: ".jackpot-prev",
  },
});

new Swiper(".swiper-hero-bottom", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 3000,
  },
  pagination: {
    el: ".hero-bottom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-bottom-next",
    prevEl: ".hero-bottom-prev",
  },
});

new SideBar();
