/* =========================
   GLOBAL VARIABLES
========================= */
let menuOpen = false;
let isHindi = localStorage.getItem("lang") === "hi";

/* =========================
   MENU TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (!menu) return;

  menu.style.left = menuOpen ? "-250px" : "0";
  menuOpen = !menuOpen;
}

/* =========================
   LANGUAGE TOGGLE
   English (default)
   Hindi (optional)
========================= */
function toggleLang() {
  isHindi = !isHindi;
  localStorage.setItem("lang", isHindi ? "hi" : "en");
  applyLanguage();
}

function applyLanguage() {
  const langBtn = document.querySelector(".lang-btn");
  if (langBtn) {
    langBtn.innerText = isHindi ? "English" : "Hindi";
  }

  // Elements with data-en / data-hi
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = isHindi ? el.getAttribute("data-hi") : el.getAttribute("data-en");
  });
}

/* =========================
   USER / MERCHANT HELPERS
========================= */
function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function getMerchant() {
  return JSON.parse(localStorage.getItem("merchant"));
}

function logoutUser() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function logoutMerchant() {
  localStorage.removeItem("merchant");
  window.location.href = "merchant-login.html";
}

/* =========================
   ON PAGE LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage();
});
