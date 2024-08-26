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


                <div className="expenses-table p-4 border rounded shadow">
                    <h3 className="text-lg font-semibold mb-2">Expenses</h3>
                    <div>
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="text-left">Month</th>
                                    <th className="text-right">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((expense) => (
                                    <tr key={expense.month}>
                                        <td className="py-1 text-left">{expense.month}</td>
                                        <td className="py-1 text-right">${expense.amount.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

// Export the Expenses component as the default export
export default Expenses;
