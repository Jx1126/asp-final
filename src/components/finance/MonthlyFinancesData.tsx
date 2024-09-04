// src/components/MonthlyFinances.tsx

import React, { useState, useEffect } from "react";
import MonthlyFinance from "./MonthlyFinances";

const URL = "http://localhost:3001"; // Make sure this is your actual backend URL
const incomeSourcesArray = ["Salary", "Investments", "Freelancing"];
const expenseSourcesArray = ["Rent", "Groceries", "Utilities", "Entertainment"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getYearMonthSource(year: number, month: number, source: string) {
  let urlString = `${URL}/yearmonthsource?year=${year}&month=${month}&source=${source}`;
  let data = await fetch(urlString);
  let response = await data.json();
  return response["SUM(amount)"] || 0;
}

async function getYearMonthType(year: number, month: number, type: string) {
  let urlString = `${URL}/yearmonthtype?year=${year}&month=${month}&type=${type}`;
  let data = await fetch(urlString);
  let response = await data.json();
  return response["SUM(amount)"] || 0;
}

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

const MonthlyFinancesData: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newMonthlyDataArray: MonthlyData[] = [];

        for (let i = 0; i < 12; i++) {
          let currentMonthName = monthNames[i];

          // Fetch income sources data in parallel
          let currentIncomeSources = await Promise.all(
            incomeSourcesArray.map(async (s) => {
              let amount = await getYearMonthSource(2024, i, s);
              return { source: s, amount };
            })
          );

          // Fetch expense sources data in parallel
          let currentExpenseSources = await Promise.all(
            expenseSourcesArray.map(async (s) => {
              let amount = await getYearMonthSource(2024, i, s);
              return { source: s, amount };
            })
          );

          let currentTotalIncome = await getYearMonthType(2024, i, "Income");
          let currentTotalExpenses = await getYearMonthType(2024, i, "Expense");
          let currentSavings = 1200;
          let currentDisposableIncome =
            currentTotalIncome - currentTotalExpenses - currentSavings;

          newMonthlyDataArray.push({
            month: `${currentMonthName} 2024`,
            incomeSources: currentIncomeSources,
            expenseSources: currentExpenseSources,
            summary: {
              totalIncome: currentTotalIncome,
              totalExpenses: currentTotalExpenses,
              savings: currentSavings,
              disposableIncome: currentDisposableIncome,
            },
          });
        }

        setMonthlyData(newMonthlyDataArray);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  const toggleMonth = (month: string) => {
    setActiveMonth(activeMonth === month ? null : month);
  };

  const activeMonthData = monthlyData.find(
    (data) => data.month === activeMonth
  );

  return (
    <div className="monthly-finances">
      <div className="month-list">
        {monthlyData.map((data) => (
          <div className="border-gray-300 rounded-lg mt-4 mb-4 border-2 shadow-inner">
            <div key={data.month} className="text-center">
              <div
                className="month-button bg-gray-100 p-4 cursor-pointer font-semibold hover:bg-cyan-100 transition"
                onClick={() => toggleMonth(data.month)}
              >
                {data.month}
              </div>
              {activeMonth === data.month && activeMonthData && (
                <div className="bg-white p-4">
                  {/* Display detailed financial information */}
                  <MonthlyFinance data={activeMonthData} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyFinancesData;
