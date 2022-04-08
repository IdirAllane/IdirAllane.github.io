import { reviews } from "./reviews.js";

// get DOM Elements
const img = document.querySelector("img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");

// declare iterator variable
let counter = 0;

// first loading
window.addEventListener("DOMContentLoaded", () => {
    img.src = reviews[counter].img;
    name.innerHTML = reviews[counter].name;
    job.innerHTML = reviews[counter].job;
    review.innerHTML = reviews[counter].review;
});

// prev button functionality
prevButton.addEventListener("click", () => {
    console.log("prev got clicked");

    if (counter === 0) {
        counter = 3;
        img.src = reviews[counter].img;
        name.innerHTML = reviews[counter].name;
        job.innerHTML = reviews[counter].job;
        review.innerHTML = reviews[counter].review;
    } else {
        counter--;
        img.src = reviews[counter].img;
        name.innerHTML = reviews[counter].name;
        job.innerHTML = reviews[counter].job;
        review.innerHTML = reviews[counter].review;
    }
});

// next button functionality
nextButton.addEventListener("click", () => {
    console.log("next got clicked");

    if (counter === reviews.length - 1) {
        counter = 0;
        img.src = reviews[counter].img;
        name.innerHTML = reviews[counter].name;
        job.innerHTML = reviews[counter].job;
        review.innerHTML = reviews[counter].review;
    } else {
        counter++;
        img.src = reviews[counter].img;
        name.innerHTML = reviews[counter].name;
        job.innerHTML = reviews[counter].job;
        review.innerHTML = reviews[counter].review;
    }
});

//random review functionality
randomButton.addEventListener("click", () => {
    counter = Math.floor(Math.random() * 4);

    img.src = reviews[counter].img;
    name.innerHTML = reviews[counter].name;
    job.innerHTML = reviews[counter].job;
    review.innerHTML = reviews[counter].review;
});
