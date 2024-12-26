import { getExpenses } from "./shared.js";

document.addEventListener("DOMContentLoaded", function () {
  const summaryDisplay = document.getElementById("summaryDisplay");

  // Fetch expenses from localStorage
  const expenses = getExpenses();

  if (expenses.length === 0) {
    summaryDisplay.innerHTML = "<p>No expenses added yet.</p>";
    return;
  }

  // Calculate total amount and unique participants
  const totalAmount = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const participants = [...new Set(expenses.map((expense) => expense.payer))];
  const amountPerPerson = totalAmount / participants.length;

  // Create the output
  summaryDisplay.innerHTML = `
    <p><strong>Total Amount:</strong> <span style="color: #D32F2F;">$${totalAmount.toFixed(
      2
    )}</span></p>
    <p><strong>Amount per Person:</strong> $${amountPerPerson.toFixed(2)}</p>
    <p><strong>Participants:</strong> ${participants.join(", ")}</p>
  `;
});
