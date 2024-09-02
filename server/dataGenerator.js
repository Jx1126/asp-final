import Database from "better-sqlite3";
import { eachDayOfInterval } from "date-fns";

const db = new Database("app.db");

db.exec(`DROP TABLE IF EXISTS transactions`);

let schema = `
CREATE TABLE transactions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
date TEXT NON NULL,
year INTEGER NON NULL,
month INTEGER NON NULL,
type TEXT NON NULL,
source TEXT NON NULL,
amount REAL NON NULL
)
`;

db.exec(schema);

function myRandom(num) {
  return Math.floor(Math.random() * num);
}

function myChoice(arr) {
  return arr[myRandom(arr.length)];
}

const dateRange = eachDayOfInterval({
  start: new Date(2020, 0, 1),
  end: new Date(),
});

const transactionType = ["Income", "Expense"];
const incomeSource = ["Salary", "Investments", "Freelancing"];
const expenseSource = ["Rent", "Groceries", "Utilities", "Entertainment"];

let transactions = [];

for (let i = 0; i < dateRange.length; i++) {
  for (let j = 0; j < myRandom(10); j++) {
    let chosenTransactionType = myChoice(transactionType);
    let chosenTransactionSource;
    if (chosenTransactionType == "Income") {
      chosenTransactionSource = myChoice(incomeSource);
    } else {
      chosenTransactionSource = myChoice(expenseSource);
    }
    let chosenTransactionAmount = myRandom(100);

    let obj = {
      date: dateRange[i].toISOString().split("T")[0],
      year: dateRange[i].getFullYear(),
      month: dateRange[i].getMonth(),
      type: chosenTransactionType,
      source: chosenTransactionSource,
      amount: chosenTransactionAmount,
    };

    transactions.push(obj);
  }
}

let query = `INSERT INTO transactions (date, year, month, type, source, amount) VALUES (?, ?, ?, ?, ?, ?)`;

let insertData = db.prepare(query);

transactions.forEach((transaction) => {
  insertData.run(
    transaction.date,
    transaction.year,
    transaction.month,
    transaction.type,
    transaction.source,
    transaction.amount
  );
});
