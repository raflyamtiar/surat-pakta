const iconNav = document.getElementById("icon-nav");
const menuList = document.getElementById("menu-list");

iconNav.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

function togglePopup(popupId) {
  document.getElementById(popupId).classList.toggle("active");
}
