import { getExpenses } from "./shared.js";

document.addEventListener("DOMContentLoaded", function () {
  const expenseList = document.getElementById("expenseList");

  // Fetch expenses
  const expenses = getExpenses();

  if (expenses.length === 0) {
    expenseList.textContent = "No expenses added yet.";
    return;
  }

  // Render each expense
  expenses.forEach((expense) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Payer:</strong> ${expense.payer}</p>
      <p><strong>Amount:</strong> $${expense.amount.toFixed(2)}</p>
      <p><strong>Description:</strong> ${expense.description || "N/A"}</p>
      <hr>
    `;
    expenseList.appendChild(div);
  });
});
