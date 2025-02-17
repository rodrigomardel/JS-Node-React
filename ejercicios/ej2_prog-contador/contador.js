// Importamos el módulo 'fs' para manejar archivos
const fs = require("fs");

// Nombre del archivo donde se guardará el contador
const archivo = "contador.txt";

/**
 * Función para obtener el valor actual del contador.
 * Si el archivo no existe, devuelve 0.
 */
function obtenerContador() {
  if (!fs.existsSync(archivo)) {
    return 0; // Si el archivo no existe, el contador comienza en 0
  }
  return parseInt(fs.readFileSync(archivo, "utf-8")) || 0;
}

/**
 * Función para guardar un nuevo valor en el archivo del contador.
 * @param {number} valor - Nuevo valor del contador.
 */
function guardarContador(valor) {
  fs.writeFileSync(archivo, valor.toString(), "utf-8");
}

/**
 * Función para aumentar el contador en 1.
 */
function aumentar() {
  let valor = obtenerContador(); // Obtener el valor actual
  valor++; // Incrementar en 1
  guardarContador(valor); // Guardar el nuevo valor en el archivo
  console.log(`🔼 Contador aumentado: ${valor}`);
}

/**
 * Función para disminuir el contador en 1.
 */
function disminuir() {
  let valor = obtenerContador(); // Obtener el valor actual
  valor--; // Disminuir en 1
  guardarContador(valor); // Guardar el nuevo valor en el archivo
  console.log(`🔽 Contador disminuido: ${valor}`);
}

/**
 * Función para mostrar el valor actual del contador.
 */
function mostrar() {
  console.log(`📊 Valor actual del contador: ${obtenerContador()}`);
}

// Capturamos el comando ingresado en la terminal
const comando = process.argv[2];

// Evaluamos el comando y llamamos a la función correspondiente
switch (comando) {
  case "aumentar":
    aumentar();
    break;
  case "disminuir":
    disminuir();
    break;
  case "mostrar":
    mostrar();
    break;
  default:
    console.log("❓ Comandos disponibles: aumentar, disminuir, mostrar");
}
