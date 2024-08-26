
// src/components/MonthlyFinanceDetails.tsx

import React from 'react';
import IncomeMonthly from './IncomeMonthly';
import ExpensesMonthly from './ExpensesMonthly';
import SummaryMonthly from './SummaryMonthly';
import PieChart from './PieChart';

interface MonthlyFinanceProps {
  data: {
    month: string;
    incomeSources: { source: string; amount: number }[];
    expenseSources: { source: string; amount: number }[];
    summary: {
      totalIncome: number;
      totalExpenses: number;
      savings: number;
      disposableIncome: number;
    };
  };
}


const MonthlyFinance: React.FC<MonthlyFinanceProps> = ({ data }) => {
  const incomeLabels = data.incomeSources.map((source) => source.source);
  const incomeValues = data.incomeSources.map((source) => source.amount);

  const expenseLabels = data.expenseSources.map((source) => source.source);
  const expenseValues = data.expenseSources.map((source) => source.amount);

  const summaryLabels = ['Expenses', 'Savings', 'Disposable Income'];
  const summaryValues = [
    data.summary.totalExpenses,
    data.summary.savings,
    data.summary.disposableIncome,
  ];

  const incomeColors = ['#e07a5f', '#3d405b', '#81b29a', '#f4f1de', '#f2cc8f'];
  const expenseColors = ['#f6bd60', '#f7ede2', '#f5cac3', '#84a59d', '#f28482'];
  const summaryColors = ['#cdb4db', '#ffafcc', '#bde0fe', '#ffc8dd', '#a2d2ff'];


  return (
    <div className="monthly-finance-details">
      {/* Income Table */}
      <div className="mb-4">
        
        <IncomeMonthly incomeSources={data.incomeSources} />
      </div>

      {/* Expenses Table */}
      <div className="mb-4">
        
        <ExpensesMonthly expenseSources={data.expenseSources} />
      </div>

      <div className="mb-4">
        <SummaryMonthly month={data.month} summary={data.summary} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Income Distribution"
            labels={incomeLabels}
            data={incomeValues}
            backgroundColors={incomeColors}
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Expenses Distribution"
            labels={expenseLabels}
            data={expenseValues}
            backgroundColors={expenseColors}
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Monthly Summary"
            labels={summaryLabels}
            data={summaryValues}
            backgroundColors={summaryColors}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyFinance;




