// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Define props interface for the Summary component
interface SummaryProps {
  data: {
    yearlyIncome: number;
    expenses: number;
    recurringSavings: number;
    availableDisposableIncome: number;
  };
}

// Define the Summary component
const Summary: React.FC<SummaryProps> = ({ data }) => {
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
        <div className="mt-2 space-y-2">
          <div className="justify-between">
            <p><strong>Yearly Income:</strong></p>
            <p className="text-green-600">${data.yearlyIncome.toFixed(2)}</p>
          </div>
          <div className="justify-between">
            <p><strong>Expenses:</strong></p>
            <p className="text-red-600">${data.expenses.toFixed(2)}</p>
          </div>
          <div className="justify-between">
            <p><strong>Recurring Savings:</strong></p>
            <p className="text-blue-600">${data.recurringSavings.toFixed(2)}</p>
          </div>
          <div className="justify-between">
            <p><strong>Available Disposable Income:</strong></p>
            <p>${data.availableDisposableIncome.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Export the Summary component as the default export
export default Summary;
