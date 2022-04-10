const ipsums = document.querySelectorAll(".comparer-content");

ipsums.forEach((ipsum) => {
    const btn = ipsum.querySelector("button");

    btn.addEventListener("click", (e) => {
        console.log("click");
        ipsums.forEach((otherIpsum) => {
            if (otherIpsum !== ipsum) {
                otherIpsum.children[1].classList.remove("show");
            }
        });
        ipsum.children[1].classList.toggle("show");
    });
});
