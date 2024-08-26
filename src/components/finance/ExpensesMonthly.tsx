import React, { useState } from 'react';

interface ExpensesMonthlyProps {
  expenseSources: { source: string; amount: number }[];
}

const ExpensesMonthly: React.FC<ExpensesMonthlyProps> = ({ expenseSources }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="bg-red-100 p-2 cursor-pointer justify-between items-center font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Expenses</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="expenses-table p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Expenses</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="text-left">Source</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenseSources.map((expense, index) => (
                <tr key={index}>
                  <td className="py-1 text-left">{expense.source}</td>
                  <td className="py-1 text-right">${expense.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExpensesMonthly;