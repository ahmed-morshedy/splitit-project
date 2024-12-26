import { getExpenses, saveExpenses } from "./shared.js";

document
  .getElementById("expenseForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const payer = document.getElementById("payer").value.trim();
    const amount = parseFloat(document.getElementById("amount").value.trim());
    const description = document.getElementById("description").value.trim();

    if (!payer || isNaN(amount) || amount <= 0) {
      alert("Please provide a valid payer and a positive amount.");
      return;
    }

    // Fetch existing expenses, add the new one, and save
    const expenses = getExpenses();
    expenses.push({ payer, amount, description });
    saveExpenses(expenses);

    alert("Expense added successfully!");
    this.reset();
  });
