import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';
import Summary from './Summary';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  const deleteBudget = (id) => {
    setBudgets(budgets.filter((budget) => budget.id !== id));
  };

  return (
    <div className="App bg-gray-100 min-h-screen">
      <h1 className="text-3xl text-center font-semibold py-4">Expense Tracker</h1>
      <div className="container mx-auto px-4">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <BudgetForm addBudget={addBudget} />
        <BudgetList budgets={budgets} deleteBudget={deleteBudget} />
        <Summary expenses={expenses} budgets={budgets} />
      </div>
    </div>
  );
}

export default App;
