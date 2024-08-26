

import React, { useState } from 'react';

interface SummaryData {
  totalIncome: number;
  totalExpenses: number;
  savings: number;
  disposableIncome: number;
}

interface SummaryChartsProps {
  month: string;
  summary: SummaryData;
}

const SummaryCharts: React.FC<SummaryChartsProps> = ({ month, summary }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="bg-green-100 p-2 cursor-pointer justify-between items-center font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Summary</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="summary-charts p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Summary - {month}</h3>

          {/* Summary Table */}
          

          <div className="mt-2 space-y-2">
            <div className="justify-between">
              <p className="font-bold">Total Income</p>
              <p className="text-green-600 font-semibold">${summary.totalIncome.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Total Expenses</p>
              <p className="text-red-600 font-semibold">${summary.totalExpenses.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Savings</p>
              <p className="text-blue-600 font-semibold">${summary.savings.toFixed(2)}</p>
            </div>
            <div className="justify-between">
              <p className="font-bold">Available Disposable Income</p>
              <p className="text-yellow-600 font-semibold">${summary.disposableIncome.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummaryCharts;
