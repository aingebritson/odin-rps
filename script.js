// Get computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

let computerChoice;

if (getComputerChoice() === 1) {
    computerChoice = "Rock";
} else if (getComputerChoice() === 2) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}

console.log(computerChoice)

// Get human's choice
// Compare choices
// 