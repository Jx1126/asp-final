
import YearItem from './YearItem';
import React from 'react';
import { useState } from "react";
import FinanceHero from "./FinanceHero";
import BudgetInput from "./BudgetInput";
import FinanceCalendar from "./FinanceCalendar";
import TransactionInput from "./TransactionInput";
import MonthlyFinances from './MonthlyFinances';

export interface YearlyData {
  year: number;
  income: {
    month: string;
    amount: number;
  }[];
  expenses: {
    month: string;
    amount: number;
  }[];
  summary: {
    yearlyIncome: number;
    expenses: number;
    recurringSavings: number;
    availableDisposableIncome: number;
  };
}


const yearlyData: YearlyData[] = [
  {
    year: 2024,
    income: [
      { month: 'January', amount: 7184.64 },
      { month: 'February', amount: 9427.29 },
      { month: 'March', amount: 7522.21 },
      { month: 'April', amount: 8858.9 },
      { month: 'May', amount: 8600.2 },
      { month: 'June', amount: 7224.5 },
      { month: 'July', amount: 9238.1 },
      { month: 'August', amount: 8778.2 },
    ],
    expenses: [
      { month: 'January', amount: 1590.31 },
      { month: 'February', amount: 2031.9 },
      { month: 'March', amount: 1105.21 },
      { month: 'April', amount: 3411.2 },
      { month: 'May', amount: 1300.2 },
      { month: 'June', amount: 2021.1 },
      { month: 'July', amount: 1101.1 },
      { month: 'August', amount: 1563.2 },
    ],
    summary: {
      yearlyIncome: 66834.04,
      expenses: 14124.22,
      recurringSavings: 12000.0,
      availableDisposableIncome: 40709.82,
    },

  },
  {
    year: 2023,
    income: [
      { month: 'January', amount: 7184.64 },
      { month: 'February', amount: 9427.29 },
      { month: 'March', amount: 7522.21 },
      { month: 'April', amount: 8858.9 },
      { month: 'May', amount: 8600.2 },
      { month: 'June', amount: 7224.5 },
      { month: 'July', amount: 9238.1 },
      { month: 'August', amount: 8778.2 },
      { month: 'September', amount: 8520.2 },
      { month: 'October', amount: 7094.5 },
      { month: 'November', amount: 9228.1 },
      { month: 'December', amount: 8058.2 },
    ],
    expenses: [
      { month: 'January', amount: 1590.31 },
      { month: 'February', amount: 2031.9 },
      { month: 'March', amount: 1105.21 },
      { month: 'April', amount: 3411.2 },
      { month: 'May', amount: 1300.2 },
      { month: 'June', amount: 2021.1 },
      { month: 'July', amount: 1101.1 },
      { month: 'August', amount: 4123.2 },
      { month: 'September', amount: 2312.2 },
      { month: 'October', amount: 1123.5 },
      { month: 'November', amount: 2313.1 },
      { month: 'December', amount: 2012.2 },
    ],
    summary: {
      yearlyIncome: 99735.04,
      expenses: 24445.22,
      recurringSavings: 12000.0,
      availableDisposableIncome: 63289.82,
    },

  },
  {
    year: 2022,
    income: [
      { month: 'January', amount: 7184.64 },
      { month: 'February', amount: 9427.29 },
      { month: 'March', amount: 7522.21 },
      { month: 'April', amount: 8858.9 },
      { month: 'May', amount: 8600.2 },
      { month: 'June', amount: 7224.5 },
      { month: 'July', amount: 9238.1 },
      { month: 'August', amount: 8778.2 },
      { month: 'September', amount: 8520.2 },
      { month: 'October', amount: 7094.5 },
      { month: 'November', amount: 9228.1 },
      { month: 'December', amount: 8058.2 },
    ],
    expenses: [
      { month: 'January', amount: 1590.31 },
      { month: 'February', amount: 2031.9 },
      { month: 'March', amount: 1105.21 },
      { month: 'April', amount: 3411.2 },
      { month: 'May', amount: 1300.2 },
      { month: 'June', amount: 2021.1 },
      { month: 'July', amount: 1101.1 },
      { month: 'August', amount: 4123.2 },
      { month: 'September', amount: 2312.2 },
      { month: 'October', amount: 1123.5 },
      { month: 'November', amount: 2313.1 },
      { month: 'December', amount: 2012.2 },
    ],
    summary: {
      yearlyIncome: 99735.04,
      expenses: 24445.22,
      recurringSavings: 12000.0,
      availableDisposableIncome: 63289.82,
    },

  },
  {
    year: 2021,
    income: [
      { month: 'January', amount: 7184.64 },
      { month: 'February', amount: 9427.29 },
      { month: 'March', amount: 7522.21 },
      { month: 'April', amount: 8858.9 },
      { month: 'May', amount: 8600.2 },
      { month: 'June', amount: 7224.5 },
      { month: 'July', amount: 9238.1 },
      { month: 'August', amount: 8778.2 },
      { month: 'September', amount: 8520.2 },
      { month: 'October', amount: 7094.5 },
      { month: 'November', amount: 9228.1 },
      { month: 'December', amount: 8058.2 },
    ],
    expenses: [
      { month: 'January', amount: 1590.31 },
      { month: 'February', amount: 2031.9 },
      { month: 'March', amount: 1105.21 },
      { month: 'April', amount: 3411.2 },
      { month: 'May', amount: 1300.2 },
      { month: 'June', amount: 2021.1 },
      { month: 'July', amount: 1101.1 },
      { month: 'August', amount: 4123.2 },
      { month: 'September', amount: 2312.2 },
      { month: 'October', amount: 1123.5 },
      { month: 'November', amount: 2313.1 },
      { month: 'December', amount: 2012.2 },
    ],
    summary: {
      yearlyIncome: 99735.04,
      expenses: 24445.22,
      recurringSavings: 12000.0,
      availableDisposableIncome: 63289.82,
    },

  },
  {
    year: 2020,
    income: [
      { month: 'January', amount: 7184.64 },
      { month: 'February', amount: 9427.29 },
      { month: 'March', amount: 7522.21 },
      { month: 'April', amount: 8858.9 },
      { month: 'May', amount: 8600.2 },
      { month: 'June', amount: 7224.5 },
      { month: 'July', amount: 9238.1 },
      { month: 'August', amount: 8778.2 },
      { month: 'September', amount: 8520.2 },
      { month: 'October', amount: 7094.5 },
      { month: 'November', amount: 9228.1 },
      { month: 'December', amount: 8058.2 },
    ],
    expenses: [
      { month: 'January', amount: 1590.31 },
      { month: 'February', amount: 2031.9 },
      { month: 'March', amount: 1105.21 },
      { month: 'April', amount: 3411.2 },
      { month: 'May', amount: 1300.2 },
      { month: 'June', amount: 2021.1 },
      { month: 'July', amount: 1101.1 },
      { month: 'August', amount: 4123.2 },
      { month: 'September', amount: 2312.2 },
      { month: 'October', amount: 1123.5 },
      { month: 'November', amount: 2313.1 },
      { month: 'December', amount: 2012.2 },
    ],
    summary: {
      yearlyIncome: 99735.04,
      expenses: 24445.22,
      recurringSavings: 12000.0,
      availableDisposableIncome: 63289.82,
    },

  },
  // Add more years here...
];

const YearlySummary: React.FC = () => {
  const [budget, setBudget] = useState(0);

  function onSaveBudget(newBudget) {
    setBudget(newBudget);
  }
  return (
    <div>
      <FinanceHero />
      <div className="mt-10 mb-20 grid gap-10">
        <div>
          <TransactionInput />
          <BudgetInput onSaveBudget={onSaveBudget} />
          <div className='flex justify-center'>
            <div className="w-2/3">
              <FinanceCalendar budget={budget} />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Monthly Finances</h1>
        <div className="flex justify-center">
          <div className="finance-page w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-6">
            <MonthlyFinances />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700">Yearly Summary</h1>
        <div className="flex justify-center">
          <div className="w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-6">
            <div className="flex-col text-center   ">
              {yearlyData.map((yearData) => (
                <YearItem key={yearData.year} data={yearData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default YearlySummary;