const quotes = [
    {
        text: "And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",
        source: "The Book of Mormon - Ether 12:27",
        year: ""
    },
    {
        text: "Follow your feet, and be where you are supposed to. Your feet know where to go, move forward. When you look back, you’ll be grateful you kept walking.",
        source: "Professor Jason Hunt, BYU-I",
        year: "2026"
    },
    {
        text: '"It wont be like that for me Kaladin said." You told me that it would get worse. “It will,” Wit said, “but then it will get better. Then it will get worse again. Then better. This is life, and I will not lie by saying every day will be sunshine. But there will be sunshine again, and that is a very different thing to say. That is truth. I promise you, Kaladin: You will be warm again.” ',
        source: "Rhythm of War by Brandon Sanderson - Chapter 80",
        year: "2020"
    },
    {
        text:"Early interventions with diet, exercise, sleep and socializing make a huge difference and if engaged with early enough - the person usually still has the energy and desire to sustain the improved behaviors.",
        source: "Jeff Elder, Counseling Center, BYU-I",
        year: "2026"
    },
    {
        text: "Celebrate small victories, and do stuff, a little bit up and a little bit forward each month. Walk up a mountain one step at a time, use the switch backs and see the progress you make.",
        source: "Professor Jason Hunt, BYU-I",
        year: "2026"
    },
    {
        text: "Although genetics can affect depression and anxiety, do not let yourself think your situation can't be improved. Be an agent and choose to take your steps forward!",
        source: "Professor Jason Hunt, BYU-I",
        year: "2026"
    },
]

let dotContainer = document.querySelector(".dot-container");
let slideIndex = 0;

function quoteTemplate(quote) {
    return `
    <div class="mySlides">
            <q id="text">${quote.text}</q>
            <p id="source">${quote.source}</p>
            <p id="year">${quote.year}</p></div>`;
}

function renderQuote(quote) {
    const quoteObj = quote[slideIndex];
    let i;
    document.querySelector("#slideshow").innerHTML = quoteTemplate(quoteObj);
    let dots = document.getElementsByClassName("dot")
        for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
  dots[slideIndex].className += " active";
}
function renderDots() {
    dotContainer.innerHTML = quotes.map((_, i) => `<span class="dot" onclick="currentSlide(${i})"></span>`).join("")
}

function plusSlides(localIndex) {
    slideIndex += localIndex;
    if (slideIndex >= quotes.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = quotes.length -1}
    renderQuote(quotes)
}

function currentSlide(localIndex) {
    // if (localIndex > quotes.length) {slideIndex = -1}
    // if (slideIndex < 1) { slideIndex = quotes.length }
    slideIndex = localIndex;
    renderQuote(quotes)
}

document.addEventListener("DOMContentLoaded", () => {
    renderDots();
    renderQuote(quotes);
});


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