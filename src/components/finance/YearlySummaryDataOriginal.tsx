import React, { useState } from "react";
import YearlySummary from "./YearlySummary";

interface YearlyData {
  year: number;
  income: { month: string; amount: number }[];
  expenses: { month: string; amount: number }[];
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
      { month: "January", amount: 7184.64 },
      { month: "February", amount: 9427.29 },
      { month: "March", amount: 7522.21 },
      { month: "April", amount: 8858.9 },
      { month: "May", amount: 8600.2 },
      { month: "June", amount: 7224.5 },
      { month: "July", amount: 9238.1 },
      { month: "August", amount: 8778.2 },
    ],
    expenses: [
      { month: "January", amount: 1590.31 },
      { month: "February", amount: 2031.9 },
      { month: "March", amount: 1105.21 },
      { month: "April", amount: 3411.2 },
      { month: "May", amount: 1300.2 },
      { month: "June", amount: 2021.1 },
      { month: "July", amount: 1101.1 },
      { month: "August", amount: 1563.2 },
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
      { month: "January", amount: 7184.64 },
      { month: "February", amount: 9427.29 },
      { month: "March", amount: 7522.21 },
      { month: "April", amount: 8858.9 },
      { month: "May", amount: 8600.2 },
      { month: "June", amount: 7224.5 },
      { month: "July", amount: 9238.1 },
      { month: "August", amount: 8778.2 },
      { month: "September", amount: 8520.2 },
      { month: "October", amount: 7094.5 },
      { month: "November", amount: 9228.1 },
      { month: "December", amount: 8058.2 },
    ],
    expenses: [
      { month: "January", amount: 1590.31 },
      { month: "February", amount: 2031.9 },
      { month: "March", amount: 1105.21 },
      { month: "April", amount: 3411.2 },
      { month: "May", amount: 1300.2 },
      { month: "June", amount: 2021.1 },
      { month: "July", amount: 1101.1 },
      { month: "August", amount: 4123.2 },
      { month: "September", amount: 2312.2 },
      { month: "October", amount: 1123.5 },
      { month: "November", amount: 2313.1 },
      { month: "December", amount: 2012.2 },
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
      { month: "January", amount: 7184.64 },
      { month: "February", amount: 9427.29 },
      { month: "March", amount: 7522.21 },
      { month: "April", amount: 8858.9 },
      { month: "May", amount: 8600.2 },
      { month: "June", amount: 7224.5 },
      { month: "July", amount: 9238.1 },
      { month: "August", amount: 8778.2 },
      { month: "September", amount: 8520.2 },
      { month: "October", amount: 7094.5 },
      { month: "November", amount: 9228.1 },
      { month: "December", amount: 8058.2 },
    ],
    expenses: [
      { month: "January", amount: 1590.31 },
      { month: "February", amount: 2031.9 },
      { month: "March", amount: 1105.21 },
      { month: "April", amount: 3411.2 },
      { month: "May", amount: 1300.2 },
      { month: "June", amount: 2021.1 },
      { month: "July", amount: 1101.1 },
      { month: "August", amount: 4123.2 },
      { month: "September", amount: 2312.2 },
      { month: "October", amount: 1123.5 },
      { month: "November", amount: 2313.1 },
      { month: "December", amount: 2012.2 },
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
      { month: "January", amount: 7184.64 },
      { month: "February", amount: 9427.29 },
      { month: "March", amount: 7522.21 },
      { month: "April", amount: 8858.9 },
      { month: "May", amount: 8600.2 },
      { month: "June", amount: 7224.5 },
      { month: "July", amount: 9238.1 },
      { month: "August", amount: 8778.2 },
      { month: "September", amount: 8520.2 },
      { month: "October", amount: 7094.5 },
      { month: "November", amount: 9228.1 },
      { month: "December", amount: 8058.2 },
    ],
    expenses: [
      { month: "January", amount: 1590.31 },
      { month: "February", amount: 2031.9 },
      { month: "March", amount: 1105.21 },
      { month: "April", amount: 3411.2 },
      { month: "May", amount: 1300.2 },
      { month: "June", amount: 2021.1 },
      { month: "July", amount: 1101.1 },
      { month: "August", amount: 4123.2 },
      { month: "September", amount: 2312.2 },
      { month: "October", amount: 1123.5 },
      { month: "November", amount: 2313.1 },
      { month: "December", amount: 2012.2 },
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
      { month: "January", amount: 7184.64 },
      { month: "February", amount: 9427.29 },
      { month: "March", amount: 7522.21 },
      { month: "April", amount: 8858.9 },
      { month: "May", amount: 8600.2 },
      { month: "June", amount: 7224.5 },
      { month: "July", amount: 9238.1 },
      { month: "August", amount: 8778.2 },
      { month: "September", amount: 8520.2 },
      { month: "October", amount: 7094.5 },
      { month: "November", amount: 9228.1 },
      { month: "December", amount: 8058.2 },
    ],
    expenses: [
      { month: "January", amount: 1590.31 },
      { month: "February", amount: 2031.9 },
      { month: "March", amount: 1105.21 },
      { month: "April", amount: 3411.2 },
      { month: "May", amount: 1300.2 },
      { month: "June", amount: 2021.1 },
      { month: "July", amount: 1101.1 },
      { month: "August", amount: 4123.2 },
      { month: "September", amount: 2312.2 },
      { month: "October", amount: 1123.5 },
      { month: "November", amount: 2313.1 },
      { month: "December", amount: 2012.2 },
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

const YearlySummaryData: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const toggleYear = (year: number) => {
    setActiveYear(activeYear === year ? null : year);
  };
  const activeYearData = yearlyData.find((data) => data.year === activeYear);

  return (
    <div className="yearly-summary-data">
      <div className="year-list">
        {yearlyData.map((data) => (
          <div className="border-gray-300 rounded-lg mt-4 mb-4 border-2 shadow-inner">
            <div key={data.year} className="text-center">
              <div
                className="year-button bg-gray-100 p-4 cursor-pointer font-semibold hover:bg-cyan-100 transition"
                onClick={() => toggleYear(data.year)}
              >
                {data.year}
              </div>
              {activeYear === data.year && activeYearData && (
                <div className="bg-white p-4">
                  {/* Display detailed financial information */}
                  <YearlySummary data={activeYearData} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YearlySummaryData;
