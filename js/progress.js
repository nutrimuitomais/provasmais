function setProgress(step) {
  document.querySelectorAll('.step').forEach((el, index) => {
    if (index < step) {
      el.classList.add('active');
    }
  });
}
