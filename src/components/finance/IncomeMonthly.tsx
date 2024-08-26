// src/components/IncomeTable.tsx

import React, { useState } from 'react';


interface IncomeMonthlyProps {
  incomeSources: { source: string; amount: number }[];

}

const IncomeMonthly: React.FC<IncomeMonthlyProps> = ({ incomeSources }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div>
      <div
        className="bg-blue-100 p-2 cursor-pointer justify-between items-center font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Income</span> {/* Label for the section */}
        <span>{isOpen ? '▲' : '▼'}</span> {/* Arrow based on whether the dropdown is open */}
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default IncomeMonthly;
