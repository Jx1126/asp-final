// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Define props interface for the Summary component
interface SummaryYearlyData {
  yearlyIncome: number;
  expenses: number;
  recurringSavings: number;
  availableDisposableIncome: number;
}

interface SummaryYearlyProps {
  year: number;
  summary: SummaryYearlyData;
}
// Define the Summary component
const SummaryYearly: React.FC<SummaryYearlyProps> = ({ year, summary }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

  return (
    <div>
      <div
        className="bg-green-100 p-2 cursor-pointer justify-between items-center font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Summary</span> {/* Label for the section */}
        <span>{isOpen ? '▲' : '▼'}</span> {/* Arrow based on whether the dropdown is open */}
      </div>
      {isOpen && (
        <div className="summary-charts p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Summary - {year}</h3>
          <div className="mt-2 space-y-2">
            <div className="justify-between">
              <p className="font-bold">Yearly Income</p>
              <p className="text-green-600 font-semibold">${summary.yearlyIncome.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Expenses</p>
              <p className="text-red-600 font-semibold">${summary.expenses.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Recurring Savings</p>
              <p className="text-blue-600 font-semibold">${summary.recurringSavings.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Available Disposable Income</p>
              <p className="text-yellow-600 font-semibold">${summary.availableDisposableIncome.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// Export the Summary component as the default export
export default SummaryYearly;
