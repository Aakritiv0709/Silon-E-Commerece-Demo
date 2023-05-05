function MenuButton() {
  let menu_button_open = document.getElementById("menu-container");
  if (menu_button_open.style.display != "none") {
    menu_button_open.style.display = "none";
  } else {
    menu_button_open.style.display = "block";
  }
}
