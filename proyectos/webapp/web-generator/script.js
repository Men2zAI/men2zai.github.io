document.addEventListener("DOMContentLoaded", () => {
  const templateSelector = document.getElementById("templateSelector");
  const dataForm = document.getElementById("dataForm");
  const generateBtn = document.getElementById("generateBtn");
  const preview = document.getElementById("preview");
  const downloadBtn = document.getElementById("downloadBtn");

  const templates = {
    menu: {
      campos: ["Nombre del restaurante", "Elemento 1", "Precio 1", "Elemento 2", "Precio 2"],
      generar: (datos) => `
        <h1>${datos[0]}</h1>
        <ul>
          <li>${datos[1]} - ${datos[2]}</li>
          <li>${datos[3]} - ${datos[4]}</li>
        </ul>
      `
    },
    portfolio: {
      campos: ["Nombre", "Profesión", "Descripción corta", "Enlace a redes"],
      generar: (datos) => `
        <h1>${datos[0]}</h1>
        <h2>${datos[1]}</h2>
        <p>${datos[2]}</p>
        <a href="${datos[3]}" target="_blank">Ver más</a>
      `
    },
    presentacion: {
      campos: ["Título", "Subtítulo", "Contenido"],
      generar: (datos) => `
        <h1>${datos[0]}</h1>
        <h3>${datos[1]}</h3>
        <p>${datos[2]}</p>
      `
    }
  };

  function crearCampos(plantilla) {
    dataForm.innerHTML = "";
    templates[plantilla].campos.forEach((campo, i) => {
      const input = document.createElement("input");
      input.placeholder = campo;
      input.name = `campo${i}`;
      input.required = true;
      dataForm.appendChild(input);
    });
  }

  templateSelector.addEventListener("change", () => {
    crearCampos(templateSelector.value);
  });

  generateBtn.addEventListener("click", () => {
    const plantilla = templateSelector.value;
    const inputs = dataForm.querySelectorAll("input");
    const datos = Array.from(inputs).map(input => input.value);
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"><title>${datos[0]}</title></head>
      <body>${templates[plantilla].generar(datos)}</body>
      </html>`;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    preview.src = url;
    downloadBtn.href = url;
  });

  crearCampos(templateSelector.value); // inicial
});
