// src/components/MonthlyFinances.tsx

import React, { useState } from 'react';
import MonthlyFinanceDetails from './MonthlyFinanceDetails';
import PieChart from './PieChart';

interface MonthlyData {
    month: string;
    incomeSources: { source: string; amount: number }[];
    expenseSources: { source: string; amount: number }[];
    summary: {
        totalIncome: number;
        totalExpenses: number;
        savings: number;
        disposableIncome: number;
    };
}

const monthlyData: MonthlyData[] = [
    {
        month: 'January 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'Febuary 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'March 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'April 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'May 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'June 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'July 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    {
        month: 'August 2024',
        incomeSources: [
            { source: 'Salary', amount: 5000 },
            { source: 'Investments', amount: 1000 },
            { source: 'Freelancing', amount: 1184.64 },
        ],
        expenseSources: [
            { source: 'Rent', amount: 800 },
            { source: 'Groceries', amount: 300 },
            { source: 'Utilities', amount: 200 },
            { source: 'Entertainment', amount: 290.31 },
        ],
        summary: {
            totalIncome: 7184.64,
            totalExpenses: 1590.31,
            savings: 1200,
            disposableIncome: 4394.33,
        },
    },
    
];


const MonthlyFinances: React.FC = () => {
    const [activeMonth, setActiveMonth] = useState<string | null>(null);

    const toggleMonth = (month: string) => {
        setActiveMonth(activeMonth === month ? null : month);
    };

    const activeMonthData = monthlyData.find((data) => data.month === activeMonth);

    return (
        <div className=''>

            <div className="monthly-finances">
                

                <div className="month-list">

                    {monthlyData.map((data) => (
                        <div className='border-gray-300 rounded-lg mt-4 mb-4 border-2 shadow-inner'>
                            <div key={data.month} className='text-center'>
                                <div
                                    className="month-button bg-gray-100 p-4 cursor-pointer font-semibold hover:bg-blue-600 transition"
                                    onClick={() => toggleMonth(data.month)}
                                >
                                    {data.month}
                                </div>
                                {activeMonth === data.month && activeMonthData && (
                                    <div className="bg-white p-4">
                                        {/* Display detailed financial information */}
                                        <MonthlyFinanceDetails data={activeMonthData} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                </div>



            </div>
        </div>
    );
};

export default MonthlyFinances;
