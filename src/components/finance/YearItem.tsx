// Import React and useState from the 'react' library
import React, { useState } from 'react';
import { YearlyData } from './Finance'; // Import the YearlyData interface
import Income from './Income';
import Expenses from './Expenses';
import Summary from './Summary';
import PieChart from './PieChart';

// Define props interface for the YearItem component
interface YearItemProps {
    data: YearlyData; // Data for a specific year
}
// Define the YearItem component
const YearItem: React.FC<YearItemProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track whether the dropdown is open

    // Prepare data for the pie charts
    const incomeLabels = data.income.map((item) => item.month);
    const incomeValues = data.income.map((item) => item.amount);
    const expenseLabels = data.expenses.map((item) => item.month);
    const expenseValues = data.expenses.map((item) => item.amount);

    const summaryLabels = ['Income', 'Expenses', 'Savings', 'Disposable Income'];
    const summaryValues = [
        data.summary.yearlyIncome,
        data.summary.expenses,
        data.summary.recurringSavings,
        data.summary.availableDisposableIncome,
    ];

    const incomeColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#ff9f40',
        '#1abc9c', '#2ecc71', '#878fc9', '#9b59b6', '#34495e',
        '#f1c40f', '#e74c3c'
    ];

    const expenseColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#ff9f40',
        '#1abc9c', '#2ecc71', '#878fc9', '#9b59b6', '#34495e',
        '#f1c40f', '#e74c3c'
    ];
    const summaryColors = ['#ADDFB3', '#FF6D6A', '#8BD3E6', '#EFBE7D'];


    return (
        <div className="border border-gray-300 rounded-lg space-y-4">
            <div
                className="bg-gray-100 p-4 cursor-pointer font-semibold text-lg "
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{data.year}</span> {/* Display the year */}
                <span>{isOpen ? '▲' : '▼'}</span> {/* Display an arrow based on whether the dropdown is open */}
            </div>
            {isOpen && (
                <div className="p-4 bg-gray-50 space-y-8">
                    <div className="space-y-8">
                        <Income data={data.income} />
                    </div>
                    <div className="space-y-8">
                        <Expenses data={data.expenses} />
                    </div>
                    <div className="space-y-8">
                        <Summary data={data.summary} />
                    </div>
                    {/* Flex container for Income */}
                    <div className="mt-10 mb-20 grid grid-cols-2">
                        <div className="flex justify-center">
                            <PieChart
                                title="Monthly Income"
                                labels={incomeLabels}
                                data={incomeValues}
                                backgroundColors={incomeColors}
                            />
                        </div>
                        <div className="flex justify-center">
                            <PieChart
                                title="Monthly Expenses"
                                labels={expenseLabels}
                                data={expenseValues}
                                backgroundColors={expenseColors}
                            />
                        </div>
                    </div>

                    {/* Flex container for Summary */}
                    <div className="mb-20 flex justify-center">
                        <div className="w-twothird">
                            <PieChart
                                title="Yearly Summary"
                                labels={summaryLabels}
                                data={summaryValues}
                                backgroundColors={summaryColors}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Export the YearItem component as the default export
export default YearItem;
