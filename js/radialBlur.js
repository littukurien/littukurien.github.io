export function initRadialBlur() {
  const blur = document.querySelector('.radial-blur');
  document.addEventListener('mousemove', e => {
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
  });
}
