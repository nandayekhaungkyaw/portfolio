import './style.css'
import './node_modules/preline/dist/preline.js'
import './src/typewriteEffect.js'
import 'animate.css';


import './src/observer.js'
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
  