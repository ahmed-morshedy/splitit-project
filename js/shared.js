// Utility to retrieve expenses
function getExpenses() {
  return JSON.parse(localStorage.getItem("expenses")) || [];
}

// Utility to save expenses
function saveExpenses(expenses) {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Export utilities for other scripts
export { getExpenses, saveExpenses };
