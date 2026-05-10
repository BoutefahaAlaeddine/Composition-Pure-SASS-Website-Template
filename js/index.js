//get Elements
let theToggler = document.querySelector(".header .the-toggler");
let navbar = document.querySelector(".header .navbar");

theToggler.onclick = () => {
  navbar.classList.toggle("open");
};
