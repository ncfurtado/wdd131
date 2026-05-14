let selectElement = document.querySelector('select');
let logoImg = document.querySelector('img');
let h2 = document.querySelector('h2');

selectElement.addEventListener('change', changeTheme);

function changeTheme() {
    let currentTheme = selectElement.value;
    if (currentTheme === "dark") {
        document.body.style.backgroundColor = "#333333";
        logoImg.setAttribute('src', "../imagens/byui-logo-white.png");
        logoImg.setAttribute('alt', "BYU-I logo in white");
        logoImg.style.width = "25%"
        document.body.style.color = "white";
        h2.style.color = "#A5CEE1";
    }
    else {
        document.body.style.backgroundColor = 'white';
        logoImg.setAttribute('src', "../imagens/byui-logo-blue.webp");
        logoImg.setAttribute('alt', "BYU-I logo in blue");
        document.body.style.color = "black";
        h2.style.color = "#3469a9";
    }
}