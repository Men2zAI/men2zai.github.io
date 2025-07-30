const templates = {
  menu: {
    nombreRestaurante: "Nombre del Restaurante",
    descripcion: "Descripción del menú",
    plato1: "Plato 1",
    precio1: "Precio 1",
    plato2: "Plato 2",
    precio2: "Precio 2"
  },
  portfolio: {
    nombre: "Tu nombre",
    profesion: "Profesión o especialidad",
    sobreMi: "Descripción personal",
    proyecto1: "Nombre del proyecto 1",
    link1: "Enlace proyecto 1"
  },
  presentacion: {
    titulo: "Título de la presentación",
    contenido: "Contenido principal",
    contacto: "Email o enlace de contacto"
  }
};

document.getElementById("templateSelector").addEventListener("change", loadForm);
document.getElementById("generateBtn").addEventListener("click", generateHTML);
document.getElementById("downloadBtn").addEventListener("click", downloadHTML);

function loadForm() {
  const type = document.getElementById("templateSelector").value;
  const form = document.getElementById("dataForm");
  form.innerHTML = "";
  for (let key in templates[type]) {
    form.innerHTML += `
      <label>${templates[type][key]}</label>
      <input type="text" name="${key}" required />
    `;
  }
}

function generateHTML() {
  const type = document.getElementById("templateSelector").value;
  const formData = Object.fromEntries(new FormData(document.getElementById("dataForm")).entries());

  let htmlContent = "";

  if (type === "menu") {
    htmlContent = `
      <h1>${formData.nombreRestaurante}</h1>
      <p>${formData.descripcion}</p>
      <ul>
        <li>${formData.plato1} - ${formData.precio1}</li>
        <li>${formData.plato2} - ${formData.precio2}</li>
      </ul>
    `;
  } else if (type === "portfolio") {
    htmlContent = `
      <h1>${formData.nombre}</h1>
      <h2>${formData.profesion}</h2>
      <p>${formData.sobreMi}</p>
      <a href="${formData.link1}">${formData.proyecto1}</a>
    `;
  } else if (type === "presentacion") {
    htmlContent = `
      <h1>${formData.titulo}</h1>
      <p>${formData.contenido}</p>
      <p>Contacto: ${formData.contacto}</p>
    `;
  }

  const finalHTML = `
    <!DOCTYPE html>
    <html><head><meta charset="UTF-8"><title>Generado</title></head>
    <body>${htmlContent}</body></html>
  `;

  document.getElementById("preview").srcdoc = finalHTML;
  document.getElementById("downloadBtn").style.display = "inline-block";
  window.generatedHTML = finalHTML;
}

function downloadHTML() {
  const blob = new Blob([window.generatedHTML], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "pagina_generada.html";
  a.click();
  URL.revokeObjectURL(url);
}
