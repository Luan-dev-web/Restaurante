const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".espaco");

toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});