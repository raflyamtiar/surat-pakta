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
