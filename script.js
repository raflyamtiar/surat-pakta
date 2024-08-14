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

  // Hide all forms
  document.getElementById("pegawai-form").style.display = "none";
  document.getElementById("penyedia-jasa-form").style.display = "none";
  document.getElementById("pengguna-jasa-form").style.display = "none";

  // Show the form container
  formContainer.style.display = "block";

  // Show the selected form
  if (selectedRole === "Pegawai") {
    document.getElementById("pegawai-form").style.display = "block";
  } else if (selectedRole === "Penyedia Jasa") {
    document.getElementById("penyedia-jasa-form").style.display = "block";
  } else if (selectedRole === "Pengguna Jasa") {
    document.getElementById("pengguna-jasa-form").style.display = "block";
  } else {
    formContainer.style.display = "none"; // Hide container if no valid role is selected
  }
}
