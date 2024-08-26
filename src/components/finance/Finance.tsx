
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
    <div>
      <FinanceHero />
      <FloatingButton /> {/* Add the floating button */}

      <h1 className="mt-20 mb-10 text-3xl font-bold text-center text-blue-700">Financial Calender</h1>
      <div className="mt-10 mb-20 grid gap-10">
        <div>
          <div className='flex justify-center'>
            <div className="w-3/5">
              <FinanceCalendar budget={budget} />
            </div>
          </div>
          <BudgetInput onSaveBudget={onSaveBudget} />
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">Monthly Finances</h1>
        <div className="flex justify-center">
          <div className="finance-page w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-6">
            <MonthlyFinancesData />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700">Yearly Summary</h1>
        <div className="flex justify-center">
          <div className="w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-6">
            <YearlySummaryData />
          </div>
        </div>
      </div>
    </div>


  );
};


export default Finance;