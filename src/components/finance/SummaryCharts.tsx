// src/components/SummaryCharts.tsx

import React from 'react';

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

  return (
    <div className="summary-charts p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Summary - {month}</h3>

      {/* Summary Table */}
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Total Income</td>
            <td className="border px-4 py-2">${summary.totalIncome.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total Expenses</td>
            <td className="border px-4 py-2">${summary.totalExpenses.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Savings</td>
            <td className="border px-4 py-2">${summary.savings.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Disposable Income</td>
            <td className="border px-4 py-2">${summary.disposableIncome.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryCharts;
