// The intro automatically runs when the visitor first opens the page.
// To make it replayable during testing, press R after a refresh.
window.addEventListener('load', () => {
  // Keep the intro timing in one place so it is easy to change later.
  const introDuration = 5200;
  setTimeout(() => document.body.classList.add('intro-finished'), introDuration);
});
