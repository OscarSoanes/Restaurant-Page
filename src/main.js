// import Sushi from './home-sushi.jpg'

export function createBody() {
    const container = document.getElementById("content");
    const mainEl = document.createElement("main");
    container.appendChild(mainEl);
    setAsMenu();
}

function setAsHome() {    
    const mainEl = document.querySelector("main");
    const slogan = document.createElement("p");
    slogan.textContent = "Fresh fish, expertly rolled";

    const date = document.createElement("p");
    date.textContent = "Established in 2023";

    const img = document.createElement("img");
    img.src = "assets/home-sushi.jpg";
    img.alt = "Sushi";

    const orderMsg = document.createElement("p");
    orderMsg.textContent = "Order online or visit us!"

    mainEl.append(slogan, date, img, orderMsg)
    container.appendChild(mainEl);
}

function setAsMenu() {
    addElementToMain("dragon-roll.jpg", "Dragon Roll Sushi", "Dragon Roll Sushi", "Panko prawn and cucumber roll with grilled eel top and Teriyaki, sweet spicy sauce and ginger.");
    addElementToMain("cucumb-avacado-maki.jpg", "Cucumber Avacado Maki", "Cucumber Avacado Maki", "Sushi roll with avocado cucumber and sesame.")
}

function addElementToMain(imgSrc, imgAlt, productName, productDescription) {
    const mainEl = document.querySelector("main");
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");

    const productImgEl = document.createElement("img");
    const productNameEl = document.createElement("p");
    const productDescEl = document.createElement("p");
    productDescEl.classList.add("small");

    productImgEl.src = `assets/${imgSrc}`;
    productImgEl.alt = imgAlt;

    productNameEl.textContent = productName;
    productDescEl.textContent = productDescription;

    productContainer.append(productImgEl, productNameEl, productDescEl);
    mainEl.appendChild(productContainer);
}