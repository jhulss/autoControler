import controlAuto from "./controladorAuto";

const comandos = document.querySelector("#comandos");
const form = document.querySelector("#controlador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const control = new controlAuto();
  div.innerHTML = "<p>" + control.mover_auto(comandos.value) + "</p>";
});
