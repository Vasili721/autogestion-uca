// Lista de clases para las caras tristes
const Logos = [
    "fa-solid fa-gear",
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
    messageElement.textContent = "La página que estás buscando esta jugando un partido, pruebe de nuevo más tarde";
}
if (randomLogo === "fa-solid fa-battery-empty") {
    messageElement.textContent = "La página que estás buscando se quedo sin batería, pruebe de nuevo más tarde.";
}
