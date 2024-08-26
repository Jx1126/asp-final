
// src/components/MonthlyFinanceDetails.tsx

import React from 'react';
import IncomeTable from './IncomeTable';
import ExpensesTable from './ExpensesTable';
import SummaryCharts from './SummaryCharts';
import PieChart from './PieChart';

interface MonthlyFinanceDetailsProps {
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


const MonthlyFinanceDetails: React.FC<MonthlyFinanceDetailsProps> = ({ data }) => {
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

  const chartColors = ['#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#ff9f40'];

  return (
    <div className="monthly-finance-details">


      {/* Income Table */}
      <div className="mb-4">
        
        <IncomeTable incomeSources={data.incomeSources} />
      </div>

      {/* Expenses Table */}
      <div className="mb-4">
        
        <ExpensesTable expenseSources={data.expenseSources} />
      </div>

      <div className="mb-4">
        <SummaryCharts month={data.month} summary={data.summary} />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Income Distribution"
            labels={incomeLabels}
            data={incomeValues}
            backgroundColors={chartColors}
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Expenses Distribution"
            labels={expenseLabels}
            data={expenseValues}
            backgroundColors={chartColors}
          />
        </div>
        <div className="w-full max-w-md mx-auto">
          <PieChart
            title="Monthly Summary"
            labels={summaryLabels}
            data={summaryValues}
            backgroundColors={chartColors}
          />
        </div>
      </div>
    </div>
  );
};

export default MonthlyFinanceDetails;




