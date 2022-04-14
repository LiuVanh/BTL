const menu_toggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu");
const prevention = document.querySelector(".prevention");
const subnav_mobile = document.querySelector(".subnav-mobile");
const morelink = document.querySelector(".morelink");
const subnav2_mobile = document.querySelector(".subnav2-mobile");

//* Mở menu
menu_toggle.addEventListener("click", (e) => {
  menu.classList.add("active");
})
menu_toggle.addEventListener("touchstart", (e) => {
  menu.classList.add("active");
})

//* Đóng menu
menu.querySelector(".fa-times").addEventListener("click", (e) => {
  menu.classList.remove("active");
})
menu.querySelector(".fa-times").addEventListener("touchstart", (e) => {
  menu.classList.remove("active");
})

prevention.addEventListener("click", (e) => {
  subnav_mobile.classList.toggle("active");
})  
morelink.addEventListener("click", (e) => {
  subnav2_mobile.classList.toggle("active");
})  
