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

import {
  
  observation2,
 
  observation6,
} from "./src/observer.js";
import {
  aboutMeImg,
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  frontend1,
  frontend2,
  left,
  nav,
  skill1,
  skill2,
  skill3,
  skill4,
  test,
  ui1,
  ui2,
  ui3,
  ui4,
  ui5,
} from "./src/selector.js";
document.addEventListener("DOMContentLoaded", () => {
  // observation();
  // observation2(test, "animate__lightSpeedInLeft");
  // observation2(aboutMeImg, "animate__lightSpeedInRight");
  // observation2(nav, "animate__lightSpeedInLeft");
  // observation2(skill1, "animate__lightSpeedInRight");
  // observation2(skill2, "animate__lightSpeedInLeft");
  // observation2(skill3, "animate__lightSpeedInRight");
  // observation2(skill4, "animate__lightSpeedInLeft");
  // observation2(ui1, "animate__lightSpeedInRight");
  // observation2(ui2, "animate__lightSpeedInLeft");
  // observation2(ui3, "animate__lightSpeedInRight");
  // observation2(ui4, "animate__lightSpeedInLeft");
  // observation2(ui5, "animate__lightSpeedInRight");
  // observation2(frontend1, "animate__lightSpeedInLeft");
  // observation2(frontend2, "animate__lightSpeedInRight");
  // observation2(footer1, "animate__lightSpeedInLeft");
  // observation2(footer2, "animate__lightSpeedInRight");

  // observation2(footer3, "animate__lightSpeedInLeft");

  // observation2(footer4, "animate__lightSpeedInRight");

  // observation2(footer5, "animate__lightSpeedInLeft");

  // // observation3();
  // observation4();
  // observation5()
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
