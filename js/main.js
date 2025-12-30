let menuOpen = false;

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      if (menuOpen) {
        menu.style.left = "-260px";
      } else {
        menu.style.left = "0";
      }
      menuOpen = !menuOpen;
    });
  }
});
