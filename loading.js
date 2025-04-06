function fadeOut(element, duration = 400) {
  let opacity = 1;
  const interval = 16; // 約等於 60fps
  const gap = interval / duration;

  const fading = setInterval(() => {
    opacity -= gap;
    if (opacity <= 0) {
      opacity = 0;
      clearInterval(fading);
      element.style.display = 'none';
    }
    element.style.opacity = opacity;
  }, interval);
}
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    fadeOut(document.getElementById('moverlay'));
  }, 800);
});