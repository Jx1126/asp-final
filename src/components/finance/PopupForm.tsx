// PopupForm.tsx
import React, { useState } from 'react';

interface PopupFormProps {
  closeForm: () => void;
  
}

const PopupForm: React.FC<PopupFormProps> = ({ closeForm }) => {
  const [type, setType] = useState('income'); // 'income' or 'expense'
  const [source, setSource] = useState(''); // Selected source
  const [customSource, setCustomSource] = useState(''); // Custom source input
  const [amount, setAmount] = useState(''); // Amount input
  const [month, setMonth] = useState(''); // Month selection

  // Predefined options for income, expenses, and months
  const incomeOptions = ['Salary', 'Investments', 'Freelancing'];
  const expenseOptions = ['Rent', 'Groceries', 'Utilities', 'Entertainment'];
  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Form validation
  const isFormValid = () => {
    return (
      type && 
      (source || customSource) && // Either source or customSource must be filled
      amount && 
      month
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      // Submit form logic (e.g., updating state or sending data to a backend)
      closeForm(); // Close the form after submission
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center ease-in-out transition-all z-50">
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          {/* Type selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Type</label>
            <div className="flex space-x-4">
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={type === 'income'}
                  onChange={() => setType('income')}
                  className="mr-2"
                />
                Income
              </label>
              <label className="cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === 'expense'}
                  onChange={() => setType('expense')}
                  className="mr-2"
                />
                Expense
              </label>
            </div>
          </div>

           {/* Month selection */}
           <div className="mb-4">
            <label className="block font-semibold mb-2">Month</label>
            <select
              className="w-full p-2 border rounded"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
            >
              <option value="">Select a month</option>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Source selection */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Source</label>
            <select
              className="w-full p-2 border rounded"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              disabled={!!customSource} // Disable if customSource is filled
              required={!customSource} // Required if customSource is not filled
            >
              <option value="">Select a source</option>
              {(type === 'income' ? incomeOptions : expenseOptions).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Custom source input */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Custom Source (Optional)</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter custom source"
              value={customSource}
              onChange={(e) => setCustomSource(e.target.value)}
              disabled={!!source} // Disable if source is selected
            />
          </div>

          {/* Amount input */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Amount</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          {/* Form buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeForm}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 text-white rounded ${
                isFormValid() ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isFormValid()} // Disable button if form is invalid
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
