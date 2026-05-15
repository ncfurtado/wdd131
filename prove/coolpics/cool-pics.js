const gallery = document.getElementById("gallery");
console.log(gallery)
const modalWindow = document.querySelector("dialog");
console.log(modalWindow)
const modalImage = modalWindow.querySelector("img");
console.log(modalImage)
const closeButton = modalWindow.querySelector("button");
console.log(closeButton)
// I've added all these constants to target the 
gallery.addEventListener('click', OpenModalWindow);

function OpenModalWindow(e) {
    console.log(e.target);
    modalImage.src = e.target.src.replace("sm", "full")
    modalWindow.showModal();
}

closeButton.addEventListener('click', CloseModalWindow);
function CloseModalWindow() {
    modalWindow.close();
    modalImage.src = "";
}
modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
        modalWindow.close();
        modalImage.src = "";
    }
})