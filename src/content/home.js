export function setAsHome() {
    const container = document.getElementById("content")
    const mainEl = document.querySelector("main");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
    const slogan = document.createElement("p");
    slogan.textContent = "Fresh fish, expertly rolled";

    const date = document.createElement("p");
    date.textContent = "Established in 2023";

    const img = document.createElement("img");
    img.classList.add("home-img")
    img.src = "assets/home-sushi.jpg";
    img.alt = "Sushi";

    const orderMsg = document.createElement("p");
    orderMsg.textContent = "Order online or visit us!"

    homeContainer.append(slogan, date, img, orderMsg)
    mainEl.appendChild(homeContainer);
    container.appendChild(mainEl);
}