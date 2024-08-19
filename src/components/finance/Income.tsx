// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Define props interface for the Income component
interface IncomeProps {
  data: { month: string; amount: number }[]; // Array of income data for each month
}

// Define the Income component
const Income: React.FC<IncomeProps> = ({ data }) => {
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
        <table className="w-full mt-2 border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 text-center">Month</th>
              <th className="border border-gray-300 p-2 text-center">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((income) => (
              <tr key={income.month}>
                <td className="border border-gray-300 p-2 text-center">{income.month}</td> {/* Month name */}
                <td className="border border-gray-300 p-2 text-center">${income.amount.toFixed(2)}</td> {/* Income amount */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Export the Income component as the default export
export default Income;
