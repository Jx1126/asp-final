// src/components/IncomeTable.tsx

import React from 'react';

interface IncomeTableProps {
  incomeSources: { source: string; amount: number }[];
}
const IncomeTable: React.FC<IncomeTableProps> = ({ incomeSources }) => {
  return (
    <div className="income-table p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Income</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="text-left">Source</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeSources.map((income, index) => (
            <tr key={index}>
              <td className="py-1 text-left">{income.source}</td>
              <td className="py-1 text-right">${income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
