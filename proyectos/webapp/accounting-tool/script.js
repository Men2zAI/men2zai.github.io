const form = document.getElementById("entryForm");
const tableBody = document.querySelector("#recordsTable tbody");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");

let records = JSON.parse(localStorage.getItem("records")) || [];

function updateTable() {
  tableBody.innerHTML = "";
  let income = 0;
  let expense = 0;

  records.forEach((record, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.concept}</td>
      <td>$${record.amount}</td>
      <td>${record.type === "income" ? "Ingreso" : "Gasto"}</td>
      <td><button onclick="deleteRecord(${index})">X</button></td>
    `;
    tableBody.appendChild(row);

    if (record.type === "income") income += parseFloat(record.amount);
    else expense += parseFloat(record.amount);
  });

  totalIncome.textContent = income.toFixed(2);
  totalExpense.textContent = expense.toFixed(2);

  localStorage.setItem("records", JSON.stringify(records));
}

function deleteRecord(index) {
  records.splice(index, 1);
  updateTable();
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const concept = document.getElementById("concept").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  records.push({ concept, amount, type });
  form.reset();
  updateTable();
});

updateTable();
