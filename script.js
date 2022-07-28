let nav = document.querySelector(".style_nav_div");
let btn = document.querySelector(".toggle_btn");
let mask = document.querySelector(".mask");

btn.onclick = () => {
    nav.classList.toggle("style_nav_div_open");
    mask.classList.toggle("mask_open");
    btn.classList.toggle("toggle_open")
  };

mask.onclick = () => {
  nav.classList.toggle("style_nav_div_open");
  mask.classList.toggle("mask_open");
  btn.classList.toggle("toggle_open");
};