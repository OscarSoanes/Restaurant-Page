function createHeading(index) {
    const container = document.getElementById("content");
    const headerEl = document.createElement("header");
    const logo = document.createElement("h1");
    logo.textContent = "Dragon Roll";

    const navbar = document.createElement("nav");
    const navbarTextEl = ["Home", "Menu", "Contact"];

    navbarTextEl.forEach(element => {
        const button = document.createElement("button");
        button.type = "button";
        button.classList.add("nav-button");
        button.textContent = element;

        if (index === element) {
            button.setAttribute("id", "selected");
        }

        navbar.appendChild(button);
    });

    headerEl.append(logo, navbar);
    container.appendChild(headerEl);
}

function changeHeading (nav2Text) {
    const selected = document.getElementById("selected");
    const changeTo = document.querySelectorAll(".nav-button");

    changeTo.forEach(element => {
        console.log(nav2Text, element.textContent);
        if (element.textContent === nav2Text) {
            selected.removeAttribute("id");
            element.setAttribute("id", "selected");
        }
    })
}

export {createHeading, changeHeading};