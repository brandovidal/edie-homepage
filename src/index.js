(function () {
  document.addEventListener("DOMContentLoaded", () => getMenu());
})();

function getMenu() {
  const nav = document.querySelector(".container .nav");
  if (!nav) {
    return;
  }

  const menu = nav.querySelector("#menu");
  const navLinks = nav.querySelectorAll(".nav-items li > a");

  // Change checked menu
  menu &&
    navLinks.length > 0 &&
    navLinks.forEach((link) =>
      link.addEventListener("click", () => (menu.checked = false))
    );
}
