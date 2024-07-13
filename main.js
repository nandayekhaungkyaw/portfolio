import './style.css'
import './node_modules/preline/dist/preline.js'
import './src/typewriteEffect.js'
import 'animate.css';
import 'atropos/css'

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect:	'slide',


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



import './src/observer.js'
import Atropos from 'atropos';  

// Initialize
const myAtropos = Atropos({
  rotateXMax: 30 ,
  el: '.my-atropos',
  // rest of parameters
});
const myThirdAtroops = Atropos({
  rotateXMax: 30 ,
  el: '.my-third-atropos',
  // rest of parameters
});

const myFourthAtropos = Atropos({
  rotateXMax: 30 ,
  el: '.my-fourth-atropos',
  // rest of parameters
});
const myFifthAtropos = Atropos({
  rotateXMax: 30 ,
  el: '.my-fifth-atropos',
  // rest of parameters
});
const mySecondAtropos = Atropos({
  rotateXMax: 30 ,
  el: '.my-second-atropos',
  // rest of parameters
});


import { observation, observation2, observation3, observation4, observation5, observation6 } from './src/observer.js';
import { aboutMe, left } from './src/selector.js';
document.addEventListener("DOMContentLoaded", () => {
    // observation();
    // observation2();
    // // observation3();
    // observation4();
    // observation5()
    
    observation6(left,'animate__fadeInLeftBig')
    observation6(aboutMe,'animate__fadeInRightBig')
  });
  