export function initScrollControls() {
  const center = document.querySelector('.center-section');
  document.querySelector('.scroll-down')
    .addEventListener('click', () => center.scrollBy({ top: window.innerHeight/2, behavior: 'smooth' }));
  document.querySelector('.scroll-up')
    .addEventListener('click', () => center.scrollBy({ top: -window.innerHeight/2, behavior: 'smooth' }));

  // mobile overflow fix
  if (window.innerWidth <= 1024) {
    center.style.overflowY = 'visible';
  }
}
