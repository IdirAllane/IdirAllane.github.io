//DOM Elements
const headlines = document.querySelector("#headlines");
const links = document.getElementsByTagName("a");

//variables
let left = headlines.offsetLeft;
let animationId;

function moveLinks() {
    //ticker speed
    left -= 2;

    // check if link has completely passed to left
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";

    animationId = requestAnimationFrame(moveLinks);
}

moveLinks();

// Eventlisteners mouseover mouseleave

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", () => {
        cancelAnimationFrame(animationId);
        links[i].style.color = "red";
        links[i].style.textDecoration = "underline";
    });
    links[i].addEventListener("mouseleave", () => {
        moveLinks();
        links[i].style.color = "black";
        links[i].style.textDecoration = "none";
    });
}
