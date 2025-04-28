function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}
console.log(getComputerChoice())

function getHumanChoice(){

    return prompt("Enter your choice: rock, paper, or scissors")

}

console.log(getHumanChoice())

const humanScore = 0

const computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!"
    } else {
        return "You lose!"
    }
}
console.log(playRound(getHumanChoice(), getComputerChoice()))

function game() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(`Round ${i + 1}:`)
        console.log(`You chose: ${humanChoice}`)
        console.log(`Computer chose: ${computerChoice}`)
        console.log(playRound(humanChoice, computerChoice))
    }
}
game()
function updateScore(result) {
    if (result === "You win!") {
        humanScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }
}   
function displayScore() {
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}
function resetScore() {
    humanScore = 0;
    computerScore = 0;
}
function playGame() {
    resetScore();
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(`Round ${i + 1}:`);
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);
        updateScore(result);
        displayScore();
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie!");
    }
}