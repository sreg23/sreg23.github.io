// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav__link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("nav__link--active");
    }
  });
});

