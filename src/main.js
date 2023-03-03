import {setAsHome} from './content/home.js'
import {setAsMenu} from './content/menu.js'

export function createBody() {
    const container = document.getElementById("content");
    const mainEl = document.createElement("main");
    container.appendChild(mainEl);
    setAsMenu();
}