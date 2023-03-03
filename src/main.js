// import Sushi from './home-sushi.jpg'

export function createBody() {
    const container = document.getElementById("content");
    const mainEl = document.createElement("main");
    container.appendChild(mainEl);
    setAsHome();
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