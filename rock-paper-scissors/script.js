const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (['bomb', 'rock', 'paper', 'scissors'].includes(userInput)) {
        return userInput
    } else { console.log("ERROR - YOUR INPUT IS NOT A ROCK, PAPER, OR SCISSCORS") }
};

choice = getUserChoice('rock');

const getComputerChoice = () => {
    let ranNum = Math.floor(Math.random() * 3)
    return ['rock', 'paper', 'scissors'][ranNum]
}

pcChoice = getComputerChoice()

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') { return "You blow the computer to ashes!!" }
    if (userChoice === computerChoice) { return "The match is a tie!" }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') { return "The computer's paper smothers your rock!" } else { return "You smash the computer's scissors with your rock!" }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') { return "The computer shreds your paper with its scissors!" } else { return "Your paper smothers the computer's rock!" }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') { return "The computer smashes your scissors with its rock!" } else { return "You shred the computer's paper to bits!" }
    }
}

function playGame() {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    console.log("Player: " + userChoice);
    console.log("Computer: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()