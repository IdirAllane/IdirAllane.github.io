const images = document.querySelectorAll("img");
const dots = document.querySelectorAll(".dot");
let idx = 0;
let transition = false;
let timer;

function moveImages(newIdx) {
    //removes current image from screen and removes selected dot

    images[idx].classList.remove("on");
    images[idx].classList.add("off");
    dots[idx].classList.remove("selected");

    //add 1 to index
    idx++;

    if (newIdx != undefined) {
        idx = newIdx;
    }

    if (idx == images.length) {
        idx = 0;
    }

    //brings next image on screen
    images[idx].classList.add("on");
    dots[idx].classList.add("selected");

    transition = true;

    //removes the .off class from transitioned image
    document.addEventListener("transitionend", (e) => {
        if (e.target.className == "off") {
            e.target.classList.remove("off");

            //reset transition
            transition = false;
        }
    });

    timer = setTimeout(moveImages, 5000);
}

// handle click function
function clickHandler(newIdx) {
    return function () {
        console.log("click", newIdx);
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
// add eventlisteners to all dots
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", clickHandler(i));
}

// call first function after 1sec

timer = setTimeout(moveImages, 1000);
