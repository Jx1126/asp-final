// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Define props interface for the Income component
interface IncomeYearlyProps {
  data: { month: string; amount: number }[]; // Array of income data for each month
}

// Define the Income component
const IncomeYearly: React.FC<IncomeYearlyProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

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
              <th className="text-left">Month</th>
              <th className="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
          {data.map((income) => (
              <tr key={income.month}>
                <td className="py-1 text-left">{income.month}</td>
                <td className="py-1 text-right">${income.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
};

// Export the Income component as the default export
export default IncomeYearly;
