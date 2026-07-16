// all following functions are for Trivia page
questions = [
    {
        question: "In Star Wars: A New Hope, what is the name of Han Solo's iconic ship?",
        answers:[
            {text: "The Star Destroyer", isCorrect: false},
            {text: "The Millennium Falcon", isCorrect: true},
            {text: "The Razor Crest", isCorrect: false}
         ]
    },
    {
        question: "Which 1994 Disney movie features a young lion prince named Simba?",
        answers:[
            {text: "The Jungle Book", isCorrect: false},
            {text: "The Lion King", isCorrect: true},
            {text: "Madagascar", isCorrect: false}
         ]
    },
    {
        question: "In the Marvel Cinematic Universe, what is the name of Thor's hammer?",
        answers:[
            {text: "Jonathon", isCorrect: false},
            {text: "Mjolnir", isCorrect: true},
            {text: "Stormbreaker", isCorrect: false}
         ]
    },
    {
        question: "Which movie is known for the famous line: I'm going to make him an offer he can't refuse?",
        answers:[
            {text: "Goodfellas", isCorrect: false},
            {text: "The Godfather", isCorrect: true},
            {text: "Scarface", isCorrect: false}
         ]
    },
    {
        question: "In Back to the Future, what speed must the DeLorean reach to travel through time?",
        answers:[
            {text: "55 mph", isCorrect: false},
            {text: "88 mph", isCorrect: true},
            {text: "100 mph", isCorrect: false}
         ]
    },
    {
        question: "Who played the character of Jack Sparrow in the Pirates of the Caribbean series?",
        answers:[
            {text: "Orlando Bloom", isCorrect: false},
            {text: "Johnny Depp", isCorrect: true},
            {text: "Geoffrey Rush", isCorrect: false}
         ]
    },
    {
        question: "What is the name of the fictional kingdom where Frozen takes place?",
        answers:[
            {text: "Genovia", isCorrect: false},
            {text: "Arendelle", isCorrect: true},
            {text: "Florin", isCorrect: false}
         ]
    },
    {
        question: "In The Matrix, what color pill does Neo take to see the truth?",
        answers:[
            {text: "Green", isCorrect: false},
            {text: "Red", isCorrect: true},
            {text: "Blue", isCorrect: false}
         ]
    },
    {
        question: "Which actor played the Joker in the 2008 film The Dark Knight?",
        answers:[
            {text: "Joaquin Phoenix", isCorrect: false},
            {text: "Heath Ledger", isCorrect: true},
            {text: "Jack Nicholson", isCorrect: false}
         ]
    },
    {
        question: "In the Harry Potter series, what is the name of the school Harry attends?",
        answers:[
            {text: "Durmstrang Institute", isCorrect: false},
            {text: "Hogwarts School of Witchcraft and Wizardry", isCorrect: true},
            {text: "Beauxbatons Academy", isCorrect: false}
         ]
    }
];
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('nav');

menuBtn.addEventListener('click', () => menuNav.classList.toggle('hidden'));

let score = 0;
let currentQuestionIndex = 0;
const triviaContainer = document.getElementById('trivia-load');
const triviaBtn = document.querySelector('.start-game');

triviaBtn.addEventListener('click', playGame);

function playGame() {
    triviaContainer.innerHTML = '';
    let currentQuestion = questions[currentQuestionIndex];
    let shuffledAnswers = [...currentQuestion.answers].sort(() => Math.random() - 0.5)
    html = `
        <div class='score'>Score: ${score} points | ${currentQuestionIndex + 1}/10</div>
        <h2>${currentQuestion.question}</h2>
        <div class='answers'></div>
    `;
    triviaContainer.innerHTML += html;
    let answerContainer = document.querySelector('.answers');
    shuffledAnswers.forEach(answer => {
        let answerChoice = `
            <button class="answer-btn" data-correct="${answer.isCorrect}">${answer.text}</button>
        `
        answerContainer.innerHTML += answerChoice;
    })
    answerContainer.addEventListener('click', choiceSelection)
};
function choiceSelection(e) {
    const button = e.target;
    if (button.dataset.correct === 'true') {
        score += 20
        document.querySelector('.score').textContent = 'Score: ' + score + ' points';
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
    } else {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    };
    setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        playGame();
    } else {
        triviaContainer.innerHTML = `<h1>Great job! You scored ${score} points!</h1>`
    }
    }, 1000);
};