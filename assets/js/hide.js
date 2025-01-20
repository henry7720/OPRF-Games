document.addEventListener("keydown", function (e) {
  if (e.keyCode === 75 && e.ctrlKey || e.keyCode === 75 && e.metaKey) {
    window.location.href = "/linear.html";
  }
});