let menuBtn = document.getElementsByClassName("menu-btn")[0];
console.log(menuBtn);

menuBtn.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide")
    menuBtn.classList.toggle("change");
}