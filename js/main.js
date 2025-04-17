import { initRadialBlur } from './radialBlur.js';
import { initInteractiveWords } from './interactiveWords.js';
import { initScrollControls } from './scrollControls.js';

const sections = [
  'about',
  'featured-projects',
  'technical-skills',
  'awards',
  'experience',
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
