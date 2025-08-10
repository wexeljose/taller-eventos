document
  .getElementById("saludarBtn")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    alert("¡Hola!");
  });

document.getElementById("container").addEventListener("click", function () {
  alert("¡Hola desde el div!");
});
