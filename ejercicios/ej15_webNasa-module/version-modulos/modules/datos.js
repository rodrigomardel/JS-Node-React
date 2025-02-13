function obtenerDatos() {
  const NASA_API_KEY = "DEMO_KEY"; // Reemplázalo con tu API Key si tienes una
  const fechaSeleccionada = document.getElementById("fecha").value;

  if (!fechaSeleccionada) {
    alert("Por favor, selecciona una fecha.");
    return;
  }

  const url = `https://api.nasa.gov/planetary/apod?date=${fechaSeleccionada}&api_key=${NASA_API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => mostrarDatos(data))
    .catch((error) => console.error("Error al obtener los datos:", error));
}

function mostrarDatos(data) {
  document.getElementById("titulo").textContent = data.title;
  document.getElementById("fecha-mostrada").textContent = data.date;
  document.getElementById("descripcion").textContent = data.explanation;

  const multimediaContainer = document.getElementById("c_multimedia");
  multimediaContainer.innerHTML = "";

  if (data.media_type === "video") {
    multimediaContainer.innerHTML = `<iframe class="embed-responsive-item" width="560" height="315" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
  } else {
    multimediaContainer.innerHTML = `<img src="${data.url}" alt="${data.title}" class="img-fluid rounded">`;
  }
}

export { obtenerDatos, mostrarDatos };
