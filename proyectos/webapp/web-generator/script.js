document.getElementById("webForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const bgcolor = document.getElementById("bgcolor").value;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        body { background-color: ${bgcolor}; font-family: Arial, sans-serif; padding: 2rem; }
        h1 { color: #00303f; }
        p { font-size: 1.2rem; }
        footer { margin-top: 2rem; font-size: 0.8rem; color: #777; }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${desc}</p>
      <footer>Generado por Men2zAI Web Builder</footer>
    </body>
    </html>
  `;

  const preview = document.getElementById("preview");
  preview.srcdoc = htmlContent;

  const downloadBtn = document.getElementById("downloadBtn");
  downloadBtn.classList.remove("hidden");

  downloadBtn.onclick = function () {
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "pagina_generada.html";
    a.click();
    URL.revokeObjectURL(url);
  };
});
