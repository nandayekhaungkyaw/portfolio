import "./style.css";
import "./node_modules/preline/dist/preline.js";
import "./src/typewriteEffect.js";
import "animate.css";
import "atropos/css";
const uiUx = document.querySelector("#uiUx");
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slide",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

import "./src/observer.js";
import Atropos from "atropos";

// Initialize
const myAtropos = Atropos({
  rotateXMax: 30,
  el: ".my-atropos",
  // rest of parameters
});
const myThirdAtroops = Atropos({
  rotateXMax: 30,
  el: ".my-third-atropos",
  // rest of parameters
});

const myFourthAtropos = Atropos({
  rotateXMax: 30,
  el: ".my-fourth-atropos",
  // rest of parameters
});
const myFifthAtropos = Atropos({
  rotateXMax: 30,
  el: ".my-fifth-atropos",
  // rest of parameters
});
const mySecondAtropos = Atropos({
  rotateXMax: 30,
  el: ".my-second-atropos",
  // rest of parameters
});



const uiBtn = document.querySelector("#uiBtn");
uiBtn.addEventListener("click", scroll);

function scroll(uiUx) {
  if (uiUx) {
    console.log(typeof uiUx);
    uiUx.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    console.log("scrool");
  }
}
