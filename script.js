function saludar() {
  alert("¡Hola!");
}

function saludoDiv() {
  alert("¡Hola desde el div!");
}

document
  .getElementById("container")
  .addEventListener("click", saludoDiv, mouseEvent);
