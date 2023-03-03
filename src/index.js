import {createHeading, changeHeading} from './heading.js';
import { createBody, changeBody  } from './main.js';

let currentHeading = "Home"
createHeading(currentHeading)
createBody()

const navBarButtons = document.querySelectorAll(".nav-button")
navBarButtons.forEach(button => button.addEventListener('click', () => {
    changeHeading(button.textContent);
    changeBody(button.textContent);
    currentHeading = button.textContent;
}))