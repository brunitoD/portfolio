"use strict";
const menu = document.querySelector(".menu-hamburguesa");
const lista = document.querySelector(".lista");
if (menu && lista) {
    menu.addEventListener("click", () => {
        if (lista.classList.contains("active")) {
            lista.classList.remove("active");
            lista.classList.add("invisible");
        }
        else {
            lista.classList.remove("invisible");
            lista.classList.add("active");
        }
    });
}
