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
  document.getElementById("form-pegawai").style.display = "none";
  document.getElementById("form-penyedia-jasa").style.display = "none";
  document.getElementById("form-pengguna-jasa").style.display = "none";
  document.getElementById("form-auditor").style.display = "none";

  // Show the selected form
  if (selectedRole === "Pegawai") {
    formContainer.style.display = "block";
    document.getElementById("form-pegawai").style.display = "block";
  } else if (selectedRole === "Penyedia Jasa") {
    formContainer.style.display = "block";
    document.getElementById("form-penyedia-jasa").style.display = "block";
  } else if (selectedRole === "Pengguna Jasa") {
    formContainer.style.display = "block";
    document.getElementById("form-pengguna-jasa").style.display = "block";
  } else if (selectedRole === "Auditor") {
    formContainer.style.display = "block";
    document.getElementById("form-auditor").style.display = "block";
  } else {
    formContainer.style.display = "none"; // Hide container if no valid role is selected
    return; // Exit if no valid role is selected
  }

  // Scroll smoothly to the form container
  formContainer.scrollIntoView({ behavior: "smooth" });
}
