const formulario = document.getElementById("formulario-dinamico");
const preview = document.getElementById("preview-frame");

document.getElementById("template").addEventListener("change", actualizarFormulario);

function actualizarFormulario() {
  const tipo = document.getElementById("template").value;
  formulario.innerHTML = "";

  if (tipo === "menu") {
    formulario.innerHTML = `
      <input placeholder="Nombre del restaurante" id="nombre" /><br>
      <textarea placeholder="Lista de platos" id="contenido"></textarea><br>
    `;
  } else if (tipo === "portfolio") {
    formulario.innerHTML = `
      <input placeholder="Tu nombre" id="nombre" /><br>
      <input placeholder="Profesión" id="contenido" /><br>
    `;
  } else if (tipo === "presentacion") {
    formulario.innerHTML = `
      <input placeholder="Título de la presentación" id="nombre" /><br>
      <textarea placeholder="Descripción breve" id="contenido"></textarea><br>
    `;
  }
}

function generarPagina() {
  const nombre = document.getElementById("nombre").value;
  const contenido = document.getElementById("contenido").value;
  const html = `
    <!DOCTYPE html><html><head><meta charset="UTF-8"><title>${nombre}</title></head>
    <body><h1>${nombre}</h1><p>${contenido}</p></body></html>
  `;
  preview.srcdoc = html;
  window.generatedHTML = html;
}

function descargar() {
  const blob = new Blob([window.generatedHTML], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pagina-generada.html";
  a.click();
}
