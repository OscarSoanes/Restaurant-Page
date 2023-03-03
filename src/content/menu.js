export function setAsMenu() {
    addElementToMain("dragon-roll.jpg", "Dragon Roll Sushi", "Dragon Roll Sushi", "Panko prawn and cucumber roll with grilled eel top and Teriyaki, sweet spicy sauce and ginger.");
    addElementToMain("cucumb-avacado-maki.jpg", "Cucumber Avacado Maki", "Cucumber Avacado Maki", "Sushi roll with avocado cucumber and sesame.");
    addElementToMain("salmon-maki.jpg", "California Maki", "California Maki", "Sushi roll with crabmeat, avocado, cucumber and tobiko.");
    addElementToMain("salmon-sashimi.jpg", "Salmon Sashimi (Small)", "Salmon Sashimi (Small)", "7 piece Salmon sashimi");
    addElementToMain("salmon-sashimi-xl.jpg", "Salmon Sashimi (Large)", "Salmon Sashimi (Large)", "15 piece Salmon sashimi");
    addElementToMain("salmon-tuna-sashimi.jpg", "Salmon Tuna Sashimi", "Salmon TUna Sashimi", "4 piece salmon sashimi and 3 piece tuna sashimi");
    addElementToMain("sushi-delight.jpg", "Salmon Delight Roll Box", "Salmon Delight Roll Box", "Red cabbage, avo cucumber roll, topped with fresh salmon, wasabi mayo, furikage and tobiko.");
    addElementToMain("tuna-roll.jpg", "Tuna Delight Roll Box", "Tune Delight Roll Box", "Red cabbage, avo cucumber roll, topped with fresh salmon, wasabi mayo, furikage and tobiko.");
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