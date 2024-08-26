import React from 'react';

interface ExpensesTableProps {
  expenseSources: { source: string; amount: number }[];
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({ expenseSources }) => {
  return (
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
  );
};

export default ExpensesTable;