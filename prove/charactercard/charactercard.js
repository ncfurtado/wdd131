const data = {
    characters: [
        {
            characterNumber: 1,
            name: "Snortleblat",
            class: "Swamp Beast Diplomat",
            level: 5,
            health: 100,
            imgLink: "../../images/snortleblat.webp"
        }
    ],
    attacked: function (characterNumber) {
        const characterIndex = this.characters.findIndex(character => character.characterNumber == characterNumber);
        if (this.characters[characterIndex].health > 0) {
            this.characters[characterIndex].health -= 20;
        }
        else if (this.characters[characterIndex].health = 0) {
            alert(`${this.characters[characterIndex].name} is defeated!`);
        }
        if (this.characters[characterIndex].health <= 0) {
       alert(`${this.characters[characterIndex].name} has been defeated!`);
        }
        renderCharacters(this.characters);
        
    },
    levelUp: function (characterNumber) {
        const characterIndex = this.characters.findIndex(character => character.characterNumber == characterNumber);
        this.characters[characterIndex].level++;
        renderCharacters(this.characters);
    }
}

function cardTemplate(character) {
    return `<div class="card">
        <img class="image" src="${character.imgLink}" alt="${character.name}">
        <h2 class="name">${character.name}</h2>
        <div class="stats">
            <p>Class: ${character.class}</p>
            <p>Level: ${character.level}</p>
            <p>Health: ${character.health}</p>
        </div>
        <div class="buttons">
            <button class="attacked" data-num="${character.characterNumber}">Attacked</button>
            <button class="levelUp" data-num="${character.characterNumber}">Level Up</button>
        </div>
    </div>`
}

function renderCharacters(characters) {
    const html = characters.map(cardTemplate);
    document.querySelector("#characters").innerHTML = html.join("");
}

renderCharacters(data.characters);

document.querySelector("#characters").addEventListener("click", function (e) {
    const charNum = e.target.dataset.num;
    if (e.target.classList.contains("attacked")) {
        data.attacked(charNum);
    }
    if (e.target.classList.contains("levelUp")) {
        data.levelUp(charNum);
    }
});