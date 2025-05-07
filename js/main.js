import { initRadialBlur } from './radialBlur.js';
import { initInteractiveWords } from './interactiveWords.js';
import { initScrollControls } from './scrollControls.js';

const sections = [
  'about',
  'technical-skills',
  'awards',
  'experience',
//  'featured-projects',
  'education'
];

async function loadSections() {
  const container = document.getElementById('main-content');
  for (const id of sections) {
    const resp = await fetch(`partials/${id}.html`);
    if (resp.ok) {
      container.insertAdjacentHTML('beforeend', await resp.text());
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadSections();
  initRadialBlur();
  initInteractiveWords();
  initScrollControls();
});
