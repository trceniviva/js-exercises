const pushOut = document.getElementById("send-stuff-here");

let nums = []

function fizzBuzz() {
    for (var num = 1; num<=100; num++){
        if (num % 3 === 0 && num % 5 ===0) {nums.push("fizzbuzz")}
        else if (num % 3 === 0) {nums.push("fizz")}
        else if (num % 5 === 0) {nums.push("buzz")}
        else {nums.push(num)};
    };
    for (i = 0; i < nums.length; i++){
        let newRow = document.createElement("p");
        newRow.innerHTML = nums[i];
        pushOut.appendChild(newRow)
    }
}