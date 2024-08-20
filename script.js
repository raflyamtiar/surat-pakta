const iconNav = document.getElementById("icon-nav");
const menuList = document.getElementById("menu-list");

iconNav.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});
function togglePopup(popupId) {
  document.getElementById(popupId).classList.toggle("active");
}

function showForm() {
  const selectedRole = document.getElementById("form-role").value;
  const formContainer = document.getElementById("form-container");
  const roleTitle = document.getElementById("role-title");

  if (selectedRole !== "null") {
    roleTitle.innerText = selectedRole.toUpperCase();
    formContainer.style.display = "block";
    formContainer.scrollIntoView({ behavior: "smooth" });
  } else {
    formContainer.style.display = "none";
  }
}

// Dapatkan elemen tombol
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Fungsi untuk menunjukkan tombol ketika di-scroll ke bawah
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Fungsi untuk scroll ke atas ketika tombol diklik
scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
};
