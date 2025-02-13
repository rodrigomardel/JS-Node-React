/**Obtiene los datos de una fecha concreta haciendo una llamada a la api de la NASA */
function obtenerDatos(fechaSeleccionada) {
  const NASA_API_KEY = "DEMO_KEY";

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

/**Muestra los datos obtenidos anteriormente */
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

export { obtenerDatos };
