import React from 'react';

function Summary({ expenses, budgets }) {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalBudget = budgets.reduce((acc, budget) => acc + budget.limit, 0);
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Summary</h2>
      <div className="mt-4">
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Total Budget: ${totalBudget}</p>
        <p>Remaining Budget: ${remainingBudget}</p>
      </div>
    </div>
  );
}

export default Summary;
