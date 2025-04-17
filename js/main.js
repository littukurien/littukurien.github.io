import { initRadialBlur } from './radialBlur.js';
import { initInteractiveWords } from './interactiveWords.js';
import { initScrollControls } from './scrollControls.js';

// Initialize features on DOM ready
window.addEventListener('DOMContentLoaded', () => {
  initRadialBlur();
  initInteractiveWords();
  initScrollControls();
});
