document.getElementById('web-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const pageType = document.getElementById('pageType').value;
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 2rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1 { color: #2c3e50; }
    .section { margin-top: 2rem; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>

  <div class="section">
    <h2>Contenido: ${pageType}</h2>
    <p>Esta sección está diseñada como una plantilla para una página de tipo <strong>${pageType}</strong>.</p>
  </div>
</body>
</html>
`;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${pageType}_page.html`;
  link.click();
});
