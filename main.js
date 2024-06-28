import './style.css'
import './node_modules/preline/dist/preline.js'
import './src/typewriteEffect.js'
import 'animate.css';

import './src/observer.js'
import { observation, observation2, observation3, observation4, observation5 } from './src/observer.js';
document.addEventListener("DOMContentLoaded", () => {
    observation();
    observation2();
    observation3();
    observation4();
    observation5()
  });
  