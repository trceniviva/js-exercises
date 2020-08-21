input = document.getElementById("exampleFormControlTextarea1");
outputField = document.getElementById("what-you-can-do");

function whatCanIDo() {
    if (input.value >= 62) {
        outputField.innerHTML = "Time to collect social security! You old fart :D"
    } else if (input.value >= 35) {
        outputField.innerHTML = "Folks your age can run for president! Get off your butt!"
    } else if (input.value >= 25) {
        outputField.innerHTML = "You can rent a car! Drive to Vegas! Get married! Start a family!"
    } else if (input.value >= 21) {
        outputField.innerHTML = "You can drink beer! But who needs alcohol to have fun? Well... me.. "
    } else if (input.value >= 18) {
        outputField.innerHTML = "Get out the vote! And your cigarettes! And your gun! And pornos!"
    } else if (input.value >= 16) {
        outputField.innerHTML = "A driver's license is now in view!"
    } else if (input.value < 16) {
        outputField.innerHTML ="You can't do much other than go to school :("
    }
    else {outputField.innerHTML = "Did you enter an age at all?"};
}