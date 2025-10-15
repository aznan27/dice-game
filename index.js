var diceOne = Math.random();
diceOne = diceOne * 6;
diceOne = Math.floor(diceOne) + 1;
console.log(diceOne);

var diceTwo = Math.random();
diceTwo = diceTwo * 6;
diceTwo = Math.floor(diceTwo) + 1;
console.log(diceTwo);

if (diceOne > diceTwo) {
    console.log(document.querySelector("h1").innerHTML = "Player 1 Wins!");
}
if (diceTwo > diceOne) {
    console.log(document.querySelector("h1").innerHTML = "Player 2 Wins!");
} else if (diceOne === diceTwo) {
    console.log(document.querySelector("h1").innerHTML = "It's A Draw!");
}

