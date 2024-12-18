// Lista de clases para las caras tristes
const Logos = [
    "fa-regular fa-face-frown",
    "fa-regular fa-face-frown-open",
    "fa-regular fa-face-sad-cry",
    "fa-regular fa-face-sad-tear",
    "fa-regular fa-futbol",
    "fa-solid fa-face-dizzy",
    "fa-solid fa-face-meh",
    "fa-solid fa-battery-empty",
    "fa-solid fa-book-skull",
    "fa-solid fa-circle-xmark",
    "fa-solid fa-gear",
    "fa-solid fa-head-side-virus",
    "fa-solid fa-heart-crack",
    "fa-solid fa-link-slash",
    "fa-solid fa-plug-circle-xmark",
    "fa-solid fa-radiation",
    "fa-solid fa-screwdriver-wrench",
    "fa-solid fa-skull",
    "fa-solid fa-skull-crossbones",
    "fa-solid fa-toilet-paper-slash",
    "fa-solid fa-toolbox"
];

// Seleccionar un ícono al azar
const randomLogo = Logos[Math.floor(Math.random() * Logos.length)];

// Crear el elemento <i> y añadir la clase seleccionada
const iconContainer = document.getElementById("icon-container");
const icon = document.createElement("i");
icon.className = randomLogo;

// Añadir el ícono al contenedor
iconContainer.appendChild(icon);

// Cambiar el mensaje si aparece la pelota de fútbol
const messageElement = document.querySelector("p");
if (randomLogo === "fa-regular fa-futbol") {
    messageElement.textContent = "Go and play outside!";
}
if (randomLogo === "fa-solid fa-battery-empty") {
    messageElement.textContent = "The Page you are looking for its out of battery, sorry.";
}