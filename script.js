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

// Get human's choice
function getHumanChoice() {
    let humanChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
    return humanChoice;
}

//Play 5 rounds
function playGame() {
    // Declare players score variables
    let humanScore = 0;
    let computerScore = 0;

    // Play single round
    function playRound(humanChoice, computerChoice) {
        let humanCompare = humanChoice.toLowerCase();
        let evaluate = humanCompare + computerChoice;
        switch (evaluate) {
            case "rockRock":
            case "paperPaper":
            case "scissorsScissors":
                console.log("Tie! Go again!");
                break;
            case "rockScissors":
                console.log("You win! Rock beats Scissors!");
                humanScore++;
                break;
            case "rockPaper":
                console.log("You lose! Paper beats Rock!");
                computerScore++;
                break;
            case "paperRock":
                console.log("You win! Paper beats Rock!");
                humanScore++;
                break;
            case "paperScissors":
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
                break;
            case "scissorsRock":
                console.log("You lose! Rock beats Scissors!");
                computerScore++;
                break;
            case "scissorsPaper":
                console.log("You win! Scissors beats Paper!");
                humanScore++;
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log("Score: " + humanScore + " to " +computerScore);

    // Play to 5
    while (humanScore < 5 && computerScore < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();        
        playRound(humanSelection, computerSelection);
        console.log("Score: " + humanScore + " to " +computerScore);
    }

    // Declare winner
    if (computerScore === 5) {
        console.log ("Game over! You lose!");
    } else {
        console.log("Game over! You win!");
    }
}

playGame();