// password
function togglePasswordVisibility() {
  // Ambil elemen checkbox dan input password
  const showPasswordCheckbox = document.getElementById("show-password");
  const passwordInput = document.getElementById("password");

  // Tambahkan event listener pada checkbox
  showPasswordCheckbox.addEventListener("change", function () {
      if (this.checked) {
          // Jika checkbox di centang, ubah tipe input menjadi text
          passwordInput.type = "text";
      } else {
          // Jika checkbox tidak di centang, ubah tipe input kembali menjadi password
          passwordInput.type = "password";
      }
  });
}

const dropdowns = document.querySelectorAll(".dropdown-admin");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select-admin");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu-admin");
  const options = dropdown.querySelectorAll(".menu-admin li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
      select.classList.toggle("select-admin-clicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-admin-open");
  });

  options.forEach((option) => {
      option.addEventListener("click", () => {
          selected.innerText = option.innerText;
          // Menutup dropdown setelah item dipilih
          select.classList.remove("select-admin-clicked");
          caret.classList.remove("caret-rotate");
          menu.classList.remove("menu-admin-open");

          // Mengatur item yang aktif
          options.forEach((option) => {
              option.classList.remove("active");
          });
          option.classList.add("active");
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const noWhatsappInput = document.getElementById("no_whatsapp");

  // Event listener saat pengguna mengetik pada input
  noWhatsappInput.addEventListener("input", function (e) {
      // Hapus angka 0 di depan jika ada
      if (this.value.startsWith("0")) {
          this.value = this.value.substring(1);
      }
  });

  // Event listener saat pengguna submit form
  document.querySelector("form").addEventListener("submit", function (e) {
      // Pastikan input tidak kosong dan memenuhi kriteria
      if (!noWhatsappInput.value.match(/^\d{8,14}$/)) {
          alert(
              "Nomor WhatsApp harus terdiri dari 8 hingga 14 digit dan tidak boleh diawali dengan angka 0."
          );
          e.preventDefault();
      }
  });
});

//delete
function confirmDelete(itemId) {
  Swal.fire({
      title: "Apa kamu yakin?",
      text: "Data ini tidak dapat dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
      cancelButtonText: "Tidak, batalkan!",
  }).then((result) => {
      if (result.isConfirmed) {
          document.getElementById("delete-form-" + itemId).submit();
          Swal.fire({
              title: "Terhapus!",
              text: "Data kamu berhasil terhapus.",
              icon: "success",
          });
      }
  });
}

function confirmDelete(adminId) {
  Swal.fire({
      title: "Apa kamu yakin?",
      text: "Akun ini tidak dapat dikembalikan",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
      cancelButtonText: "Tidak, batalkan!",
  }).then((result) => {
      if (result.isConfirmed) {
          // Jika pengguna mengonfirmasi, kirim form untuk penghapusan data
          document.getElementById("delete-form-" + adminId).submit();
          Swal.fire({
              title: "Terhapus!",
              text: "Akun kamu berhasil terhapus.",
              icon: "success",
          });
      }
  });
}

//logout
document.getElementById("logout-btn").addEventListener("click", function (e) {
  e.preventDefault(); // Mencegah form logout langsung terkirim

  Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda akan keluar dari akun!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, logout!",
      cancelButtonText: "Tidak, batalkan!",
  }).then((result) => {
      if (result.isConfirmed) {
          // Kirim form logout jika user mengkonfirmasi logout
          document.getElementById("logout-form").submit();

          // Optional: Menampilkan notifikasi logout berhasil
          Swal.fire({
              title: "Logout berhasil!",
              text: "Anda telah keluar dari akun.",
              icon: "success",
          });
      }
  });
});

function toggleForm() {
  var form = document.getElementById("userForm");
  var button = document.getElementById("toggleFormBtn");

  if (form.style.display === "none") {
      form.style.display = "block";
      button.textContent = "Minimize Form";

      // Reset form ke kondisi default (untuk tambah user baru)
      document.getElementById("addUserForm").action = "/admin/store";
      document.getElementById("methodField").value = "POST"; // Default POST method
      document.getElementById("userId").value = ""; // Reset user ID
      document.getElementById("name").value = ""; // Reset name field
      document.getElementById("email").value = ""; // Reset email field
      document.getElementById("password").value = ""; // Reset password field
      document.querySelector(
          'form#addUserForm button[type="submit"]'
      ).textContent = "Simpan";

      // Ubah judul form menjadi "Tambah Admin Baru"
      document.getElementById("formTitle").textContent = "Tambah Admin Baru";

      // Sembunyikan hint password
      document.getElementById("passwordHint").style.display = "none";
  } else {
      form.style.display = "none";
      button.textContent = "Tambah User Baru";
  }
}

// JavaScript untuk toggle visibility password
document.addEventListener("DOMContentLoaded", function () {
  // Pastikan semua elemen sudah ter-load sebelum menjalankan script
  const togglePasswordButton = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (togglePasswordButton && passwordInput) {
      togglePasswordButton.addEventListener("click", function () {
          const icon = this; // Mengambil ikon mata (fa-eye/fa-eye-slash)

          // Toggle tipe input antara password dan text
          if (passwordInput.type === "password") {
              passwordInput.type = "text"; // Tampilkan password
              icon.classList.remove("fa-eye-slash"); // Ubah ikon ke mata terbuka
              icon.classList.add("fa-eye");
          } else {
              passwordInput.type = "password"; // Sembunyikan password
              icon.classList.remove("fa-eye"); // Ubah ikon ke mata tertutup
              icon.classList.add("fa-eye-slash");
          }
      });
  }
});

function editAdmin(id, name, email) {
  // Tampilkan form
  toggleForm();

  // Ubah nilai form untuk edit
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("userId").value = id;

  // Ganti method menjadi PUT untuk update
  document.getElementById("methodField").value = "PUT";

  // Ubah URL action menjadi URL update
  document.getElementById("addUserForm").action = "/admin/update/" + id;

  // Ubah button text
  document.querySelector(
      'form#addUserForm button[type="submit"]'
  ).textContent = "Perbarui";

  // Ubah judul form menjadi "Edit Akun Admin"
  document.getElementById("formTitle").textContent = "Edit Akun Admin";

  // Tampilkan hint password
  document.getElementById("passwordHint").style.display = "block";
}

// dropdown logout
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  const caretIcon = document.getElementById("caretIcon");

  // Tampilkan atau sembunyikan dropdown dan ubah ikon
  if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      caretIcon.classList.remove("rotate-icon"); // Kembalikan ikon ke posisi semula
  } else {
      dropdownContent.style.display = "block";
      caretIcon.classList.add("rotate-icon"); // Putar ikon saat dropdown dibuka
  }
}

// Tutup dropdown ketika klik di luar area dropdown
document.addEventListener("click", function (event) {
  const dropdownContent = document.getElementById("dropdownContent");
  const adminDropdown = document.getElementById("adminDropdown");
  const caretIcon = document.getElementById("caretIcon");

  if (
      !adminDropdown.contains(event.target) &&
      !dropdownContent.contains(event.target)
  ) {
      dropdownContent.style.display = "none";
      caretIcon.classList.remove("rotate-icon"); // Kembalikan ikon ke posisi semula jika dropdown tertutup
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("suratMasukChart").getContext("2d");

  // Chart.js instance
  var suratMasukChart = new Chart(ctx, {
      type: "line",
      data: {
          labels: [
              "Januari",
              "Februari",
              "Maret",
              "April",
              "Mei",
              "Juni",
              "Juli",
              "Agustus",
              "September",
              "Oktober",
              "November",
              "Desember",
          ],
          datasets: [
              {
                  label: "Jumlah Surat Masuk",
                  data: monthlyData,
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 3,
                  fill: true,
                  tension: 0.4,
                  pointBackgroundColor: "#8DC741",
                  pointBorderColor: "rgba(54, 162, 235, 1)",
                  pointBorderWidth: 2,
                  pointRadius: 4,
                  pointHoverRadius: 7,
                  pointHitRadius: 10,
              },
          ],
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              x: {
                  grid: {
                      display: false,
                  },
                  ticks: {
                      font: {
                          size: 12,
                      },
                      padding: 15, // Tambahkan padding agar label tidak menempel dengan garis
                  },
              },
              y: {
                  beginAtZero: true,
              },
          },
          plugins: {
              legend: {
                  display: true,
                  labels: {
                      font: {
                          size: 14,
                      },
                  },
              },
              tooltip: {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  titleColor: "#fff",
                  bodyColor: "#fff",
                  borderColor: "#fff",
                  borderWidth: 1,
              },
          },
      },
  });

  // Mengisi dropdown tahun dengan tahun berjalan
  const currentYear = new Date().getFullYear();
  const dropdownTahun = document.getElementById("filterTahun");

  for (let year = currentYear; year >= currentYear - 10; year--) {
      let option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      dropdownTahun.appendChild(option);
  }

  // Function untuk memperbarui chart berdasarkan kategori surat dan tahun
  window.updateChart = function () {
      var selectedCategory = document.getElementById("filterSurat").value;
      var selectedYear = document.getElementById("filterTahun").value;

      // Fetch data dari API berdasarkan tahun dan kategori
      fetch(
          `/admin/api/getDataSurat?year=${selectedYear}&category=${selectedCategory}`
      )
          .then((response) => response.json())
          .then((data) => {
              suratMasukChart.data.datasets[0].data = data.monthlyData;
              suratMasukChart.update();
          })
          .catch((error) => console.error("Error fetching data:", error));
  };

  // Memuat data awal untuk tahun sekarang
  updateChart();
});
