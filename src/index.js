import {createHeading, changeHeading} from './heading.js';

let currentHeading = "Home"
createHeading(currentHeading)

const navBarButtons = document.querySelectorAll(".nav-button")
navBarButtons.forEach(button => button.addEventListener('click', () => {
    changeHeading(button.textContent);
    currentHeading = button.textContent;
}))