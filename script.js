const roundResult = document.querySelector('#round-status');
const startBtn = document.querySelector('#start-btn');
const roundSummary = document.querySelector('#round-result');
const humanScore = document.querySelector('#human-score');
const computerScore = document.querySelector('#computer-score');
let humanScorePoint = 0;
let computerScorePoint = 0;
let gameOn = false;
let matchSummary = document.querySelector('#match-summary');

function randomNum() {
    const choices = ['rock', 'paper', 'scissor'];
    let rIndx = Math.floor(Math.random() * choices.length);
    return choices[rIndx];
}

let humanChoice = '';

function getHumanChoice() {
    let images = document.querySelectorAll('.img');
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            let idNm = e.target.id;
            if (idNm === 'rock-img') {
                humanChoice = 'rock';
            } else if (idNm === 'paper-img') {
                humanChoice = 'paper';
            } else {
                humanChoice = 'scissor';
            }
            if (gameOn) {
                playRound();
            }
        });
    });
}
const p = document.createElement('p');
const p2 = document.createElement('p');
function playRound() {
    let computer = randomNum();
    let human = humanChoice;
    if (human === '') return; // Prevent playing if no choice

    
    

    if (human === computer) {
        p.textContent = 'TIE!';
    } else if (
        (human === 'rock' && computer === 'scissor') ||
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissor' && computer === 'paper')
    ) {
        p.textContent = 'You win!!';
        humanScorePoint++;
    } else {
        p.textContent = 'Computer wins!!';
        computerScorePoint++;
    }

    p2.textContent = `You chose ${human} and Computer chose ${computer}`;
    p.classList.toggle('round-result-2');
    p2.classList.toggle('round-result-2');
    roundSummary.appendChild(p);
    roundResult.appendChild(p2);
    
    gameSetter();
}

function gameSetter() {
    matchSummary.removeAttribute('hidden');
    humanScore.textContent = `${humanScorePoint}`;
    computerScore.textContent = `${computerScorePoint}`;
    
    if (humanScorePoint === 5 || computerScorePoint === 5) {
        gameOn = false;
        let restartBtn = document.querySelector('#restart-btn');
        restartBtn.removeAttribute('hidden');
        startBtn.setAttribute('hidden', true);
        restartBtn.addEventListener('click', restartGame);
    }
}

function playGame() {
    startBtn.setAttribute('hidden', true);
    gameOn = true;
    humanChoice = '';
    roundSummary.innerHTML = ''; 
    matchSummary.setAttribute('hidden', true);
    humanScorePoint = 0;
    computerScorePoint = 0;
    humanScore.textContent = '0';
    computerScore.textContent = '0';
}

function restartGame() {
    let restartBtn = document.querySelector('#restart-btn');
    restartBtn.setAttribute('hidden',true);
    startBtn.setAttribute('hidden', true);
    roundResult.innerHTML = '';
    roundSummary.innerHTML = '';
    playGame();
}

startBtn.addEventListener('click', playGame);
getHumanChoice(); 
