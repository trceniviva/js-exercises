let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let targetNumber = 0;

function generateTarget() {
    targetNumber = Math.floor(Math.random()*10);
    return targetNumber;
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    var humanGap = humanGuess - targetNumber;
    var computerGap = computerGuess - targetNumber;
    if (Math.abs(humanGap) <= Math.abs(computerGap)) {
        return true
    } else if (computerGap < humanGap) {
        return false}
}

function updateScore(winner) {
    if (winner==='human') {
        humanScore = humanScore += 1;
    } else if (winner==='computer') {
        computerScore = computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber = currentRoundNumber + 1;
}