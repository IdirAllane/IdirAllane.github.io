const menuData = [
    {
        id: 1,
        title: "Classic Bacon and Eggs",
        category: ["All", "Breakfast"],
        price: 12.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2015/12/DD-14.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "One of the all-time best keto breakfasts ever! Step up your keto bacon and eggs game with this classic recipe.",
    },
    {
        id: 2,
        title: "Keto Turkey Plate",
        category: ["All", "Breakfast"],
        price: 11.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2017/08/DD-481-ketoturkey.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "Real food on a plate. Turkey, avocado, lettuce, cream cheese, and olive oil. Or make it your own by swapping our suggestions with your favorite lunch meat and cheese.",
    },
    {
        id: 3,
        title: "Jalapeno Popper Chaffles",
        category: ["All", "Breakfast"],
        price: 10.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2019/11/Jalepeno-Popper-Chaffles_h.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "Chaffles are the go-to keto craze that can rock any flavor, sweet or savory. In this family-friendly recipe, chaffles get a spicy upgrade with layers of cream cheese, bacon, and jalapeño poppers.",
    },
    {
        id: 4,
        title: "Seared Salmon with Creamy Lemon Sauce",
        category: ["All", "Dinner"],
        price: 15.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2019/07/keto_seared_salmon_creamy_lemon_sauce_h.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "This tender salmon recipe (with a creamy lemon sauce) incorporates everything we love about keto. Lots of flavor, simple ingredients, and butter — with none of the carbs.",
    },
    {
        id: 5,
        title: "Zucchini Lasagna",
        category: ["All", "Dinner"],
        price: 14.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2018/05/DD-631-ketozucchiniilasagnette-2.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "When only comforting classics will do, try our keto zucchini lasagna. All of the flavor with none of the carbs.",
    },
    {
        id: 6,
        title: "Cabbage Noodle Beef Stroganoff",
        category: ["All", "Dinner"],
        price: 16.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2019/02/Beef-Stroganoff-4_2.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "Beef stroganoff gets a makeover. Instead of noodles, we use thinly sliced cabbage, served with a tangy sour cream sauce, delicious mushrooms, and tender beef.",
    },
    {
        id: 7,
        title: "Indian Chicken Korma",
        category: ["All", "Dinner"],
        price: 14.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2018/10/keto_chicken_korma_h.jpg?auto=compress%2Cformat&w=1200&h=675&fit=crop",
        desc: "A keto version of this wonderful Indian dish made with chicken and cooked in a rich onion gravy with an arsenal of spices. Serve with cauliflower rice or keto naan bread for a complete Indian spread.",
    },
    {
        id: 8,
        title: "Mason Jar Ice Cream",
        category: ["All", "Dessert"],
        price: 8.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2020/04/keto-mason-jar-recipe-h.jpg?auto=compress%2Cformat&w=600&h=400&fit=crop",
        desc: "The ultimate ice cream dessert! chose between all our different flavours and enjoy a sugarfree dessert!",
    },
    {
        id: 9,
        title: "Dairy-free Custard Tarts",
        category: ["All", "Dessert"],
        price: 7.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2020/03/Keto-custard-tarts-h.jpg?auto=compress%2Cformat&w=600&h=400&fit=crop",
        desc: "These creamy egg custard tarts are here to prove that dairy-free desserts can be luscious too!",
    },
    {
        id: 10,
        title: "Keto Tiramisu",
        category: ["All", "Dessert"],
        price: 4.99,
        img: "https://i.dietdoctor.com/wp-content/uploads/2021/01/keto-tiramisu-h.jpg?auto=compress%2Cformat&w=600&h=400&fit=crop",
        desc: "Tiramisu on a diet? Oh yes! Our version hits all the classic notes.",
    },
];

const filter = document.querySelector(".filter");
const menu = document.querySelector(".menu-items");

["All", "Breakfast", "Dinner", "Dessert"].map((item) => {
    filter.innerHTML += `<button id=${item}>${item}</button>`;
});

const menuHTML = (menu) => {
    return menu
        .map((item) => {
            return `<div class="menu-item">
            <div class="menu-img">
                <img
                    src=${item.img}
                    alt=${item.title}
                />
            </div>

            <div class="menu-content">
                <div class="menu-title">
                    <h4>${item.title}</h4>
                    <h4 id="price">${item.price}$</h4>
                </div>

                <div class="menu-description">
                    <p>${item.desc}</p>
                </div>
            </div>
        </div>`;
        })
        .join("");
};

menu.innerHTML = menuHTML(menuData);

document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        const filteredData = menuData.filter((item) =>
            item.category.includes(btn.id)
        );
        menu.innerHTML = menuHTML(filteredData);
    });
});
