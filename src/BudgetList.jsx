import React from 'react';

function BudgetList({ budgets, deleteBudget }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Budget List</h2>
      <ul className="mt-4">
        {budgets.map((budget) => (
          <li key={budget.id} className="flex justify-between items-center border-b-2 py-2">
            <span>{budget.category}</span>
            <span>${budget.limit}</span>
            <button onClick={() => deleteBudget(budget.id)} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetList;
