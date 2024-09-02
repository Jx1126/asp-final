import React, { useState, useEffect } from "react";
import YearlySummary from "./YearlySummary"; // Make sure you have this component defined

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

async function getYearMonthType(year, month, type) {
  let urlString = `${URL}/yearmonthtype?year=${year}&month=${month}&type=${type}`;
  let data = await fetch(urlString);
  let response = await data.json();
  return response["SUM(amount)"];
}

async function getYearType(year, type) {
  let urlString = `${URL}/yeartype?year=${year}&type=${type}`;
  let data = await fetch(urlString);
  let response = await data.json();
  return response["SUM(amount)"];
}

const URL = "http://localhost:3001"; // Replace with your actual API URL

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

let yearsArray = [2020, 2021, 2022, 2023, 2024];

const YearlySummaryData: React.FC = () => {
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const [yearlyData, setYearlyData] = useState<YearlyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let yearlyDataArray = [];

        for (let year of yearsArray) {
          let income = [];
          let expenses = [];
          for (let i = 0; i < 12; i++) {
            let monthName = monthNames[i];
            let incomeAmount = await getYearMonthType(year, i, "Income"); // 0-indexed months
            income.push({
              month: monthName,
              amount: incomeAmount || 0,
            });
            let expensesAmount = await getYearMonthType(year, i, "Expense"); // 0-indexed months
            expenses.push({
              month: monthName,
              amount: expensesAmount || 0,
            });
          }

          let yearlyIncome = await getYearType(year, "Income");
          let yearlyExpenses = await getYearType(year, "Expense");
          let recurringSavings = 12000;
          let availableDisposableIncome =
            (yearlyIncome || 0) - (yearlyExpenses || 0) - recurringSavings;

          yearlyDataArray.push({
            year: year,
            income: income,
            expenses: expenses,
            summary: {
              yearlyIncome: yearlyIncome || 0,
              expenses: yearlyExpenses || 0,
              recurringSavings: recurringSavings,
              availableDisposableIncome: availableDisposableIncome,
            },
          });
        }

        setYearlyData(yearlyDataArray as YearlyData[]);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error appropriately (e.g., display an error message to the user)
      }
    };

    fetchData();
  }, []);

  const toggleYear = (year: number) => {
    setActiveYear(activeYear === year ? null : year);
  };
  const activeYearData = yearlyData.find((data) => data.year === activeYear);

  return (
    <div className="yearly-summary-data">
      <div className="year-list">
        {yearlyData.map((data) => (
          <div
            className="border-gray-300 rounded-lg mt-4 mb-4 border-2 shadow-inner"
            key={data.year}
          >
            <div className="text-center">
              <div
                className="year-button bg-gray-100 p-4 cursor-pointer font-semibold hover:bg-cyan-100 transition"
                onClick={() => toggleYear(data.year)}
              >
                {data.year}
              </div>
              {activeYear === data.year && activeYearData && (
                <div className="bg-white p-4">
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
