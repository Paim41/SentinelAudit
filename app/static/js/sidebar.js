(function () {
  var button = document.getElementById("mobileMenuButton");
  var sidebar = document.getElementById("sidebar");
  var backdrop = document.getElementById("sidebarBackdrop");
  if (!button || !sidebar || !backdrop) return;
  var mobileQuery = window.matchMedia("(max-width: 992px)");

  function close() {
    sidebar.classList.remove("open");
    backdrop.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", function () {
    if (mobileQuery.matches) {
      var open = !sidebar.classList.contains("open");
      sidebar.classList.toggle("open", open);
      backdrop.classList.toggle("open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    document.body.classList.toggle("nav-collapsed");
    button.setAttribute("aria-expanded", document.body.classList.contains("nav-collapsed") ? "false" : "true");
  });
  backdrop.addEventListener("click", close);
  mobileQuery.addEventListener("change", close);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") close();
  });
})();
