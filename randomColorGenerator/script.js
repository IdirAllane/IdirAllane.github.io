(() => {
    console.log("sane");

    //get DOM elements
    const background = document.querySelector(".app_generator");
    const button = document.querySelector("button");
    const hexCode1 = document.querySelector("#hex_color1");
    const hexCode2 = document.querySelector("#hex_color2");
    const gradDirection = document.querySelector("#gradient_direction");
    const hexCode = document.querySelector("#css_code");
    button.addEventListener("click", () => {
        let color1 = colorGenerator();
        let color2 = colorGenerator();
        let direction = directionGenerator();

        hexCode1.innerHTML = color1;
        hexCode1.style.color = color1;
        hexCode2.innerHTML = color2;
        hexCode2.style.color = color2;
        gradDirection.innerHTML = direction;

        background.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
        hexCode.innerHTML = `background: linear-gradient(${direction}, ${color1}, ${color2})`;
    });

    //random color generator function
    const colorGenerator = () => {
        const hexTemplate = "ABCDEF0123456789";
        let randomHex = "#";
        for (let i = 0; i < 6; i++) {
            randomHex +=
                hexTemplate[Math.floor(Math.random() * hexTemplate.length)];
        }
        return randomHex;
    };
    const directionGenerator = () => {
        const directions = [
            "to top",
            "to top left",
            "to left",
            "to bottom left",
            "to bottom",
            "to bottom right",
            "to right",
            "to top right",
        ];
        let direction =
            directions[Math.floor(Math.random() * directions.length)];
        return direction;
    };
})();
