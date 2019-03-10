let burger = document.querySelector(".burger__box");
let menu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");

burger.addEventListener("click", function () {
    burger.classList.toggle("open");
    menu.classList.toggle("show");
    body.classList.toggle("fixed");
});