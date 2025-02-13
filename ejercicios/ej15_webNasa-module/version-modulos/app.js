import { obtenerDatos } from "./modules/datos.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buscar").addEventListener("click", (e) => {
    const fechaSeleccionada = document.getElementById("fecha").value;
    console.log(fechaSeleccionada);

    obtenerDatos(fechaSeleccionada);
  });
});
