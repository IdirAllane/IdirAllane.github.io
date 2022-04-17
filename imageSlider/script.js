const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".dot");

let idx = 0;
let transition = false;
let timer;

function moveImages(newIdx) {
    images[idx].classList.remove("on");
    images[idx].classList.add("off");
    dots[idx].classList.remove("selected");

    idx++;

    if (newIdx != undefined) {
        idx = newIdx;
    }

    if (idx == images.length) {
        idx = 0;
    }

    images[idx].classList.add("on");
    dots[idx].classList.add("selected");
    transition = true;

    document.addEventListener("transitionend", (e) => {
        if (e.target.className == "off") {
            e.target.classList.remove("off");

            transition = false;
        }
    });

    timer = setTimeout(moveImages, 5000);
}

function clickHandler(newIdx) {
    return function () {
        if (transition) {
            return;
        }
        if (newIdx == idx) {
            return;
        }

        clearTimeout(timer);
        moveImages(newIdx);
    };
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", clickHandler(i));
}

timer = setTimeout(moveImages, 1000);
