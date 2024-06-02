let mediaQuery = window.matchMedia("(max-width: 460px)");

if (mediaQuery.matches) {
  document.querySelector(".th-repositories").textContent = "Repos"
  document.querySelector(".th-followers").textContent = "Seguid"
}