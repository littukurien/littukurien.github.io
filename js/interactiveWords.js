export function initInteractiveWords() {
  document.querySelectorAll('.interactive-word').forEach(word => {
    word.addEventListener('mouseenter', () => word.style.fontWeight = 'bold');
    word.addEventListener('mouseleave', () => {
      if (!word.classList.contains('active')) word.style.fontWeight = 'normal';
    });
    word.addEventListener('click', () => {
      const sec = document.getElementById(word.dataset.section);
      sec && sec.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
