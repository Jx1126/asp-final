
import React from 'react';
import { useState } from "react";

import FinanceHero from "./FinanceHero";
import BudgetInput from "./BudgetInput";
import FinanceCalendar from "./FinanceCalendar";


import YearlySummaryData from './YearlySummaryData';
import MonthlyFinancesData from './MonthlyFinancesData';
import FloatingButton from './FloatingButton';


const Finance: React.FC = () => {

  const [budget, setBudget] = useState(0);

  function onSaveBudget(newBudget) {
    setBudget(newBudget);
  }
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FinanceHero />
      <FloatingButton />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="mt-20 mb-10 text-3xl font-bold text-center text-blue-700">Financial Calender</h1>
        <div className="mt-10 mb-20 grid gap-10">
          <div>
            <div className="flex justify-center">
              <div className="sm:w-3/5">
                <FinanceCalendar budget={budget} />
              </div>
            </div>
            <BudgetInput onSaveBudget={onSaveBudget} />
          </div>

          <h1 className="text-3xl font-bold text-center text-blue-700 mt-5">Monthly Finances</h1>
          <div className="flex justify-center">
            <div className="finance-page w-full sm:w-11/12 md:5/6 lg:w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-4 sm:p-6">
              <MonthlyFinancesData />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-blue-700 mt-5">Yearly Summary</h1>
          <div className="flex justify-center">
            <div className="w-full sm:w-11/12 md:5/6 lg:w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-4 sm:p-6">
              <YearlySummaryData />
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};


export default Finance;