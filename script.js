// Getting the computer choice for the game
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length); // Random index 0, 1, or 2
    return choices[index];
}

// Getting the human choice for the game
function getHumanChoice() {
    while (true) {
        let humanChoice = prompt("Enter your choice between ('rock', 'paper', 'scissors'):");
        let choice = humanChoice.toLowerCase();
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            return choice;
        } else {
            alert("INVALID CHOICE !!! Check your spelling and try again!");
        }
    }
}

// Initializing the scores
let humanScore = 0;
let computerScore = 0;

// Main game function
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'DRAW !!!';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore += 1;
        return 'Computer wins !!! Paper beats rock';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore += 1;
        return 'Human wins !!! Rock beats scissors';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore += 1;
        return 'Human wins !!! Paper beats rock';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore += 1;
        return 'Computer wins !!! Scissors beats paper';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore += 1;
        return 'Computer wins !!! Rock beats scissors';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore += 1;
        return 'Human wins !!! Scissors beats paper';
    }
}

// Function to display the final result
function displayResult() {
    if (humanScore > computerScore) {
        return `Human wins!! The score is Human: ${humanScore} and Computer: ${computerScore}`;
    } else if (humanScore < computerScore) {
        return `Computer wins!! The score is Human: ${humanScore} and Computer: ${computerScore}`;
    } else {
        return `Match is a draw!! The score is Human: ${humanScore} and Computer: ${computerScore}`;
    }
}

// Function to play the game
function playGame() {
    let continuePlaying = true;
    
    while (continuePlaying) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundResult = playRound(humanChoice, computerChoice);
        
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(roundResult);
        console.log(`Current score - Human: ${humanScore}, Computer: ${computerScore}`);
        
        // Ask if the user wants to play another round
        continuePlaying = confirm("Do you want to play another round?");
    }
    
    // Display final result after exiting the loop
    console.log(displayResult());
}

// Start the game
playGame();
