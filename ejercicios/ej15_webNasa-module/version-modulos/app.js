import { obtenerDatos, mostrarDatos } from "./modules/datos.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("buscar").addEventListener("click", (e) => {
    let datos = obtenerDatos();
    console.log(datos);
    mostrarDatos(datos);
  });
});
