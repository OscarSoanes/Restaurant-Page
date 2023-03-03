export function setAsMenu() {
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