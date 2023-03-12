let sidebar_menu_items = document.querySelectorAll(".sidebar_menu_items");
let submenu_items = document.querySelectorAll(".submenu_items");

sidebar_menu_items = Array.from(sidebar_menu_items);
submenu_items = Array.from(submenu_items);
sidebar_menu_items.forEach((item) => {
  item.addEventListener("click", () => {
    if (
      item.nextElementSibling.classList.contains("submenu_items") &&
      item.nextElementSibling.style.height == 0
    ) {
      item.nextElementSibling.style.height =
        item.nextElementSibling.scrollHeight + "px";
      item.firstElementChild.lastElementChild.style.transform =
        "rotate(180deg)";
    } else {
      item.nextElementSibling.style.height = null;
      item.firstElementChild.lastElementChild.style.transform = null;
    }
  });
});
