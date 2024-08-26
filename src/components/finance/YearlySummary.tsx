import React from 'react';
import IncomeYearly from './IncomeYearly';
import ExpensesYearly from './ExpensesYearly';
import SummaryYearly from './SummaryYearly';
import PieChart from './PieChart';

interface YearlySummaryProps {
    data: {
        year: number;
        income: { month: string; amount: number }[];
        expenses: { month: string; amount: number }[];
        summary: {
            yearlyIncome: number;
            expenses: number;
            recurringSavings: number;
            availableDisposableIncome: number;
        };
    };
}

const YearlySummary: React.FC<YearlySummaryProps> = ({ data }) => {
    // Prepare data for the pie charts
    const incomeLabels = data.income.map((month) => month.month);
    const incomeValues = data.income.map((month) => month.amount);

    const expenseLabels = data.expenses.map((month) => month.month);
    const expenseValues = data.expenses.map((month) => month.amount);

    const summaryLabels = ['Income', 'Expenses', 'Savings', 'Disposable Income'];
    const summaryValues = [
        data.summary.yearlyIncome,
        data.summary.expenses,
        data.summary.recurringSavings,
        data.summary.availableDisposableIncome,
    ];

    const incomeColors = [
        '#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c',
        '#5f0f40', '#9a031e', '#fb8b24', '#0466c8', '#e7c6ff',
        '#9d4edd', '#e74c3c'
    ];

    const expenseColors = [
        '#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c',
        '#5f0f40', '#9a031e', '#fb8b24', '#0466c8', '#e7c6ff',
        '#9d4edd', '#e74c3c'
    ];
    const summaryColors = ['#ADDFB3', '#FF6D6A', '#8BD3E6', '#EFBE7D'];

    return (
        <div className="yearly-summary-details">
            <div className="mb-4">
                <IncomeYearly data={data.income} />
            </div>
            <div className="mb-4">
                <ExpensesYearly data={data.expenses} />
            </div>
            <div className="mb-4">
                <SummaryYearly year={data.year} summary={data.summary} />
            </div>

            <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full max-w-md mx-auto">
                    <PieChart
                        title="Monthly Income"
                        labels={incomeLabels}
                        data={incomeValues}
                        backgroundColors={incomeColors}
                    />
                </div>
                <div className="w-full max-w-md mx-auto">
                    <PieChart
                        title="Monthly Expenses"
                        labels={expenseLabels}
                        data={expenseValues}
                        backgroundColors={expenseColors}
                    />
                </div>
            </div>

            <div className="mb-20 w-full max-w-lg mx-auto">
                <PieChart
                    title="Yearly Summary"
                    labels={summaryLabels}
                    data={summaryValues}
                    backgroundColors={summaryColors}
                />
            </div>
        </div>
    )
}

export default YearlySummary;
