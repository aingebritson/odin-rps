// Get computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

// Get human's choice
function getHumanChoice() {
    humanChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    return humanChoice;
}

console.log(getHumanChoice());

// Compare choices
// 