// Importamos el módulo 'fs' para manejar archivos
// existsSync(path): Verifica si un archivo o directorio existe
// readFileSync(path, options): Lee el contenido de un archivo
// writeFileSync(path, data, options): Escribe datos en un archivo
import { existsSync, readFileSync, writeFileSync } from "fs";
// biblioteca que permite usar colores y estilos de fuentes
import chalk from "chalk";

// Nombre del archivo donde se guardará el contador
const archivo = "contador.txt";

/**
 * Función para obtener el valor actual del contador.
 * Si el archivo no existe, devuelve 0.
 */
function obtenerContador() {
  if (!existsSync(archivo)) {
    return 0; // Si el archivo no existe, el contador comienza en 0
  }
  return parseInt(readFileSync(archivo, "utf-8")) || 0;
}

/**
 * Función para guardar un nuevo valor en el archivo del contador.
 * @param {number} valor - Nuevo valor del contador.
 */
function guardarContador(valor) {
  writeFileSync(archivo, valor.toString(), "utf-8");
}

/**
 * Función para aumentar el contador en 1.
 */
function aumentar() {
  let valor = obtenerContador(); // Obtener el valor actual
  valor++; // Incrementar en 1
  guardarContador(valor); // Guardar el nuevo valor en el archivo
  console.log(chalk.blueBright(`🔼 Contador aumentado: ${valor}`));
}

/**
 * Función para disminuir el contador en 1.
 */
function disminuir() {
  let valor = obtenerContador(); // Obtener el valor actual
  valor--; // Disminuir en 1
  guardarContador(valor); // Guardar el nuevo valor en el archivo
  console.log(chalk.yellowBright(`🔽 Contador disminuido: ${valor}`));
}

/**
 * Función para mostrar el valor actual del contador.
 */
function mostrar() {
  console.log(
    chalk.greenBright(`📊 Valor actual del contador: ${obtenerContador()}`)
  );
}

// Capturamos el tercer argumento pasado en la línea de comandos.
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
    console.log(
      chalk.redBright("❓ Comandos disponibles: aumentar, disminuir, mostrar")
    );
}

// Ejemplo de funcionamiento
// node contador.js aumentar
// node contador.js disminuir
// node contador.js mostrar
