const os = require("node:os");
const fs = require("node:fs"); // a partir de Node 16, se recomienda poner node:

// Obtener información del sistema operativo
const systemInfo = {
  "Nombre del sistema operativo": os.platform(),
  "Versión del sistema operativo": os.release(),
  Arquitectura: os.arch(),
  CPUs: os.cpus().length,
  "Memoria libre (MB)": (os.freemem() / 1024 / 1024).toFixed(2),
  "Memoria total (MB)": (os.totalmem() / 1024 / 1024).toFixed(2),
  "Uptime (horas)": (os.uptime() / 60 / 60).toFixed(2),
};

// Convertir la información a texto
const infoText = Object.entries(systemInfo)
  .map(([key, value]) => `${key}: ${value}`)
  .join("\n");

const file = "info_sistema.txt";

// Escribir la información en el archivo
fs.writeFile(file, infoText, (err) => {
  if (err) {
    console.error("Error al escribir el archivo:", err);
    return;
  }
  console.log("Archivo creado con éxito:", file);

  // Leer y mostrar el contenido del archivo
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    console.log("\nContenido del archivo:");
    console.log(data);
  });
});
