(function () {
  function normalizePath(path) {
    // Remove query/hash
    path = (path || "").split("?")[0].split("#")[0];

    // Treat /contact/index.html as /contact/
    path = path.replace(/index\.html$/i, "");

    // Ensure trailing slash for non-root paths
    if (path !== "/" && !path.endsWith("/")) path += "/";

    return path;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const current = normalizePath(window.location.pathname);

    document.querySelectorAll(".nav__link").forEach((a) => {
      const href = a.getAttribute("href");
      const target = normalizePath(href);

      a.classList.toggle("nav__link--active", target === current);
    });
  });
})();
