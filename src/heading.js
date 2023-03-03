export function createHeading(index) {
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
        
        if (navbarTextEl[index] == element) {
            button.classList.add("selected");
        }

        navbar.appendChild(button);
    });

    headerEl.append(logo, navbar);
    container.appendChild(headerEl);
}