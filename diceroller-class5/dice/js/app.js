/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

2) Follow the steps below to write your code.
*/

const firstDie = document.getElementById("first-die");
const secondDie = document.getElementById("second-die");
const message = document.getElementById("message");
const rollsSum = document.getElementById("sum-of-rolls");
let allTheRolls = 0;

function rollTheDice() {
    //generate a random number between 1 - 6 and store to a variable
    let die1 = Math.ceil(Math.random()*6);

    //generate a random number between 1 - 6 and store to a variable
    let die2 = Math.ceil(Math.random()*6);

    // combine 'dice-' and random1 to form the random class for the first die, firstDie
    let fdValue = "dice-" + die1;
    let sdValue = "dice-" + die2;

    // clear all dice classes to make sure only one dice is shown
    firstDie.classList.remove("dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6")
    secondDie.classList.remove("dice-1", "dice-2", "dice-3", "dice-4", "dice-5", "dice-6")

    // add the dice that was determined by the 'random' roll
    firstDie.classList.add(fdValue)
    secondDie.classList.add(sdValue)

    let rollTotal = die1 + die2

    if ([1,2,3,4,5,6,7,9,10,12].includes(rollTotal)) {
        message.innerHTML = "You rolled a " + (die1+die2) + "!!"
    } else if ([8,11].includes(rollTotal)) {
        message.innerHTML = "You rolled an " + (die1+die2) + "!!"
    }

    allTheRolls = allTheRolls + rollTotal;

    rollsSum.innerHTML = "So far you have rolled a total of " + allTheRolls;
}

/*
3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/
