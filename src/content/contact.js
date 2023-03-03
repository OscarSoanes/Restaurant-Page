export function setAsContact() {
    const container = document.getElementById("content")
    const mainEl = document.querySelector("main");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    const telephone = document.createElement("p");
    telephone.textContent = "07123456789";

    const address = document.createElement("p");
    address.textContent = "Buckingham Palace, London SW1A 1AA";

    const map = document.createElement("img");
    map.src = "assets/map.png";
    map.alt = "A map of where Dragon Roll is located."   
    
    contactContainer.append(telephone, address, map);
    mainEl.appendChild(contactContainer);
    container.appendChild(mainEl);
}