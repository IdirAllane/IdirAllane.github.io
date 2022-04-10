// DOM Elements
const runners = document.getElementsByClassName("runner");
const donuts = document.getElementsByClassName("donut");

// runners variables
let robot = 0;
let moon = 0;
let alien = 0;
let alien2 = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 101);
}
function winnerCheck() {
    console.log("robot offsetLeft", runners[0].offsetLeft);
    console.log("robot offsetwidth", runners[0].offsetWidth);
    console.log("donut offsetLeft", donuts[0].offsetLeft);
    for (var i = 0; i < runners.length; i++) {
        if (
            runners[i].offsetLeft + runners[i].offsetWidth >=
            donuts[i].offsetLeft
        ) {
            alert(runners[i].innerText + "just won!");
            document.removeEventListener("keydown", game);
            location.reload();
        }
    }
}

function game(e) {
    if (e.keyCode === 32) {
        robot += getRandomNumber();
        moon += getRandomNumber();
        alien += getRandomNumber();
        alien2 += getRandomNumber();

        runners[0].style.left = robot + "px";
        runners[1].style.left = moon + "px";
        runners[2].style.left = alien + "px";
        runners[3].style.left = alien2 + "px";

        winnerCheck();
    }
}

document.addEventListener("keydown", game);
