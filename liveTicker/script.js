const headlines = document.querySelector("#headlines");
const links = document.getElementsByTagName("a");

let left = headlines.offsetLeft;
let animationId;

function moveLinks() {
    left -= 4.5;

    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";

    animationId = requestAnimationFrame(moveLinks);
}

moveLinks();

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
