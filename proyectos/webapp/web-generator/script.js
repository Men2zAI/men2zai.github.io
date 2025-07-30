function generateHTML() {
  const type = document.getElementById("template").value;
  const input = document.getElementById("inputData").value.trim().split("\n");

  let html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${input[0] || 'Mi Web'}</title>
</head>
<body>
  <h1>${input[0] || 'Mi Web'}</h1>
  <p>${input[1] || ''}</p>
  <ul>
`;

  for (let i = 2; i < input.length; i++) {
    html += `<li>${input[i]}</li>\n`;
  }

  html += `
  </ul>
</body>
</html>`;

  const iframe = document.getElementById("preview");
  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(html);
  doc.close();

  window.generatedHTML = html;
}

function downloadHTML() {
  if (!window.generatedHTML) return alert("Primero genera la página");
  const blob = new Blob([window.generatedHTML], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "pagina-generada.html";
  a.click();
}
