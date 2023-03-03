import {setAsHome} from './content/home.js'
import {setAsMenu} from './content/menu.js'
import { setAsContact } from './content/contact.js';

function createBody() {
    const container = document.getElementById("content");
    const mainEl = document.createElement("main");
    container.appendChild(mainEl);
    setAsHome();
}

function changeBody(changeTo) {
    const empty = (parent) => {
        while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        }
    };
    const mainEl = document.querySelector("main");
    empty(mainEl);

    if (changeTo === "Home") {
        setAsHome();
    } else if (changeTo === "Menu") {
        setAsMenu();
    } else {
        setAsContact();
    }
}

export {createBody, changeBody};