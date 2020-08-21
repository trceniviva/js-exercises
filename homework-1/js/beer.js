const outputHere = document.getElementById("main-heading");

let bottles = "bottles of beer";
let wall = "bottles of beer on the wall";
let down = "take one down, pass it around, ";

function printLyrics() {
    let lyrics = [];
    outputHere.innerHTML = "";
    for (num = 99; num > -1; num--) {
        if (num > 0) {
        let next = num-1;
        let firstOutput = num + " " + wall + ", " + num + " " + bottles + ", ";
        let secondOutput = down + next + " " + wall + "!";
        lyrics.push(firstOutput);
        lyrics.push(secondOutput); }
        else {lyrics.push("We're all out of beer!!")}
    }

    for (i = 0; i < lyrics.length; i++) {
        
        line = document.createElement("p");
        line.innerHTML = lyrics[i];
        outputHere.appendChild(line);
        if ((i-1) % 2 === 0) {
            lineBreak = document.createElement("br");
            outputHere.appendChild(lineBreak)
        }
    }
}