import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold">Expense List</h2>
      <ul className="mt-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center border-b-2 py-2">
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)} className="text-red-500 hover:text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
