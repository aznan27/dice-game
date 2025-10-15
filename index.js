let diceOne;
let diceTwo;
let result = document.querySelector("h1");
let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let refreshBtn = document.querySelector(".refresh");
let imgDiceOne = document.querySelector(".img1");
let imgDiceTwo = document.querySelector(".img2");

function refresh() {
    diceOne = "";
    diceTwo = "";
    imgDiceOne.setAttribute("src", "images/dice6.png");
    imgDiceTwo.setAttribute("src", "images/dice6.png");
    result.innerHTML = "Let's Play";
    btnOne.removeAttribute("disabled");
    btnTwo.removeAttribute("disabled");
}

function rollDice(player) {
    if (player === "one") {
        diceOne = Math.random();
        diceOne = diceOne * 6;
        diceOne = Math.floor(diceOne) + 1;
        let diceImage1 = "images/dice" + diceOne + ".png";
        imgDiceOne.setAttribute("src", diceImage1);
        btnOne.setAttribute("disabled", "true");
    } else {
        diceTwo = Math.random();
        diceTwo = diceTwo * 6;
        diceTwo = Math.floor(diceTwo) + 1;
        let diceImage2 = "images/dice" + diceTwo + ".png";
        imgDiceTwo.setAttribute("src", diceImage2);
        btnTwo.setAttribute("disabled", "true");
    }

    if (diceOne && diceTwo) {
        if (diceOne > diceTwo) {
            console.log((result.innerHTML = "Player 1 Wins!"));
        } else if (diceTwo > diceOne) {
            console.log((result.innerHTML = "Player 2 Wins!"));
        } else {
            console.log((result.innerHTML = "Draw!"));
        }
    }
}

btnOne.addEventListener("click", () => rollDice("one"));
btnTwo.addEventListener("click", () => rollDice("two"));
refreshBtn.addEventListener("click", refresh);
