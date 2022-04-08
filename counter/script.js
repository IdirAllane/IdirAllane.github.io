console.log("sane");

const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const res = document.getElementById("reset");
let counter = document.getElementById("count");
let count = Number(counter.innerHTML);

inc.addEventListener("click", () => {
    count += 1;

    count > 0
        ? (counter.style.color = "green")
        : count < 0
        ? (counter.style.color = "red")
        : (counter.style.color = "black");

    counter.innerHTML = count;
});
dec.addEventListener("click", () => {
    count -= 1;

    count > 0
        ? (counter.style.color = "green")
        : count < 0
        ? (counter.style.color = "red")
        : (counter.style.color = "black");

    counter.innerHTML = count;
});

res.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
    counter.style.color = "black";
});
