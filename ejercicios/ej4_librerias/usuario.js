import { createInterface } from "readline";
import chalk from "chalk";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa tu nombre: ", (nombre) => {
  rl.question("Ingresa tu edad: ", (edad) => {
    edad = parseInt(edad);
    let mensaje = `¡Hola, ${nombre}! Tienes ${edad} años.`;

    if (edad < 18) {
      console.log(chalk.redBright(mensaje));
    } else if (edad >= 18 && edad <= 65) {
      console.log(chalk.greenBright(mensaje));
    } else {
      console.log(chalk.blueBright(mensaje));
    }

    rl.close();
  });
});
