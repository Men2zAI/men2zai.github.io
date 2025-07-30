const templateSelect = document.getElementById("templateSelect");
const formSection = document.getElementById("formSection");
const previewFrame = document.getElementById("previewFrame");
const previewSection = document.getElementById("previewSection");

// Plantillas base
const templates = {
  menu: {
    form: `
      <h2>Datos del Menú</h2>
      <label>Nombre del restaurante: <input type="text" id="nombreRest" /></label><br>
      <label>Plato 1: <input type="text" id="plato1" /></label><br>
      <label>Plato 2: <input type="text" id="plato2" /></label><br>
      <label>Plato 3: <input type="text" id="plato3" /></label><br>
    `,
    generate: () => {
      const nombre = document.getElementById("nombreRest").value;
      const p1 = document.getElementById("plato1").value;
      const p2 = document.getElementById("plato2").value;
      const p3 = document.getElementById("plato3").value;
      return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${nombre}</title></head>
<body>
  <h1>${nombre}</h1>
  <h2>Menú</h2>
  <ul>
    <li>${p1}</li>
    <li>${p2}</li>
    <li>${p3}</li>
  </ul>
  <footer><p>Generado con Men2zAI Web Builder</p></footer>
</body>
</html>
      `;
    }
  },
  portfolio: {
    form: `
      <h2>Datos del Portafolio</h2>
      <label>Tu nombre: <input type="text" id="nombre" /></label><br>
      <label>Descripción: <input type="text" id="desc" /></label><br>
      <label>Proyecto destacado: <input type="text" id="proyecto" /></label><br>
    `,
    generate: () => {
      const nombre = document.getElementById("nombre").value;
      const desc = document.getElementById("desc").value;
      const proyecto = document.getElementById("proyecto").value;
      return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Portafolio de ${nombre}</title></head>
<body>
  <h1>${nombre}</h1>
  <p>${desc}</p>
  <h2>Proyecto destacado</h2>
  <p>${proyecto}</p>
  <footer><p>Generado con Men2zAI Web Builder</p></footer>
</body>
</html>
      `;
    }
  },
  landing: {
    form: `
      <h2>Datos de Presentación</h2>
      <label>Título principal: <input type="text" id="titulo" /></label><br>
      <label>Subtítulo: <input type="text" id="subtitulo" /></label><br>
      <label>Botón CTA (texto): <input type="text" id="boton" /></label><br>
    `,
    generate: () => {
      const titulo = document.getElementById("titulo").value;
      const subtitulo = document.getElementById("subtitulo").value;
      const boton = document.getElementById("boton").value;
      return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>${titulo}</title></head>
<body>
  <h1>${titulo}</h1>
  <p>${subtitulo}</p>
  <button>${boton}</button>
  <footer><p>Generado con Men2zAI Web Builder</p></footer>
</body>
</html>
      `;
    }
  }
};

// Cargar formulario según plantilla
function loadTemplateForm() {
  const value = templateSelect.value;
  if (!value || !templates[value]) {
    formSection.innerHTML = "";
    previewSection.style.display = "none";
    return;
  }
  formSection.innerHTML = templates[value].form;
  previewSection.style.display = "block";
  updatePreview();
  formSection.addEventListener("input", updatePreview);
}

// Generar código HTML
function generateHTML() {
  const value = templateSelect.value;
  if (!value || !templates[value]) return "";
  return templates[value].generate();
}

// Mostrar en el iframe
function updatePreview() {
  const html = generateHTML();
  previewFrame.srcdoc = html;
}

// Descargar HTML
function downloadHTML() {
  const content = generateHTML();
  const blob = new Blob([content], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pagina.html";
  a.click();
  URL.revokeObjectURL(url);
}

// Modo oscuro
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
