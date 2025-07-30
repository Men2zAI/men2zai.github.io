// Referencias a elementos
const templateSelector = document.getElementById("templateSelector");
const dynamicForm = document.getElementById("dynamicForm");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const previewFrame = document.getElementById("previewFrame");

// Estructura de plantillas
const templates = {
  basic: {
    name: "Página Básica",
    fields: [
      { label: "Título", name: "title", type: "text" },
      { label: "Descripción", name: "description", type: "textarea" }
    ],
    generateHTML: (data) => `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </body>
      </html>
    `
  },
  menu: {
    name: "Menú de Restaurante",
    fields: [
      { label: "Nombre del Restaurante", name: "restaurant", type: "text" },
      { label: "Entradas", name: "starters", type: "textarea" },
      { label: "Platos principales", name: "mains", type: "textarea" },
      { label: "Postres", name: "desserts", type: "textarea" }
    ],
    generateHTML: (data) => `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>${data.restaurant}</title>
      </head>
      <body>
        <h1>Menú - ${data.restaurant}</h1>
        <h2>Entradas</h2><p>${data.starters.replace(/\n/g, "<br>")}</p>
        <h2>Platos Principales</h2><p>${data.mains.replace(/\n/g, "<br>")}</p>
        <h2>Postres</h2><p>${data.desserts.replace(/\n/g, "<br>")}</p>
      </body>
      </html>
    `
  },
  portfolio: {
    name: "Portafolio Personal",
    fields: [
      { label: "Nombre", name: "name", type: "text" },
      { label: "Descripción", name: "bio", type: "textarea" },
      { label: "Enlace de contacto", name: "contact", type: "text" }
    ],
    generateHTML: (data) => `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>${data.name} - Portafolio</title>
      </head>
      <body>
        <h1>${data.name}</h1>
        <p>${data.bio}</p>
        <p>Contacto: <a href="${data.contact}">${data.contact}</a></p>
      </body>
      </html>
    `
  }
};

// Generar formulario dinámico
function renderForm(templateKey) {
  const template = templates[templateKey];
  dynamicForm.innerHTML = "";

  template.fields.forEach((field) => {
    const label = document.createElement("label");
    label.textContent = field.label;
    const input =
      field.type === "textarea"
        ? document.createElement("textarea")
        : document.createElement("input");

    input.name = field.name;
    input.required = true;
    input.className = "form-control";

    dynamicForm.appendChild(label);
    dynamicForm.appendChild(input);
  });
}

// Recoger los datos del formulario
function getFormData(templateKey) {
  const template = templates[templateKey];
  const data = {};
  template.fields.forEach((field) => {
    const input = dynamicForm.elements[field.name];
    data[field.name] = input.value.trim();
  });
  return data;
}

// Mostrar HTML en el iframe de vista previa
function updatePreview(htmlContent) {
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  previewFrame.src = url;
}

// Descargar archivo como .html
function downloadHTML(filename, htmlContent) {
  const blob = new Blob([htmlContent], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// Eventos
templateSelector.addEventListener("change", () => {
  renderForm(templateSelector.value);
  downloadBtn.disabled = true;
  previewFrame.src = "";
});

generateBtn.addEventListener("click", () => {
  const templateKey = templateSelector.value;
  const data = getFormData(templateKey);
  const htmlContent = templates[templateKey].generateHTML(data);
  updatePreview(htmlContent);
  downloadBtn.disabled = false;

  // Guardar para descarga posterior
  downloadBtn.onclick = () => {
    const filename = `${templateKey}.html`;
    downloadHTML(filename, htmlContent);
  };
});

// Render inicial
renderForm(templateSelector.value);
