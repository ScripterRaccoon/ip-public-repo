window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})
window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
    }, 1000)
})

const showLoader = () => {
    const loader = document.getElementById("loader_pagina")
    loader.classList.add("show_loader")
}
const hideLoader = () => {
    const loader = document.getElementById("loader_pagina")
    loader.classList.remove("show_loader")
}