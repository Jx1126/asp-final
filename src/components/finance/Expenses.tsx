// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Define props interface for the Expenses component
interface ExpensesProps {
    data: { month: string; amount: number }[]; // Array of expenses data for each month
}

// Define the Expenses component
const Expenses: React.FC<ExpensesProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

    return (
        <div>
            <div
                className="bg-red-100 p-2 cursor-pointer justify-between items-center font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>Expenses</span> {/* Label for the section */}
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
                        {data.map((expense) => (
                            <tr key={expense.month}>
                                <td className="border border-gray-300 p-2 text-center">{expense.month}</td> {/* Month name */}
                                <td className="border border-gray-300 p-2 text-center">${expense.amount.toFixed(2)}</td> {/* Expense amount */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

// Export the Expenses component as the default export
export default Expenses;
