import Database from "better-sqlite3";
import express from "express";
import cors from "cors";

const db = new Database("server/app.db");

const app = express();
app.use(express.json());
app.use(cors());

// Get transactions based on Year, Month and Source
function getYearMonthSource(year, month, source) {
  let query = `SELECT SUM(amount) FROM transactions WHERE year=? AND month=? AND source=?`;
  let response = db.prepare(query).get(year, month, source);
  return response;
}

app.get("/yearmonthsource", (req, res) => {
  let response = getYearMonthSource(
    req.query.year,
    req.query.month,
    req.query.source
  );
  res.send(response);
});

// Get transactions based on Year, Month and Type
function getYearMonthType(year, month, type) {
  let query = `SELECT SUM(amount) FROM transactions WHERE year=? AND month=? AND type=?`;
  let response = db.prepare(query).get(year, month, type);
  return response;
}

app.get("/yearmonthtype", (req, res) => {
  let response = getYearMonthType(
    req.query.year,
    req.query.month,
    req.query.type
  );
  res.send(response);
});

// Get transactions based on Year and Type
function getYearType(year, type) {
  let query = `SELECT SUM(amount) FROM transactions WHERE year=? AND type=?`;
  let response = db.prepare(query).get(year, type);
  return response;
}

app.get("/yeartype", (req, res) => {
  let response = getYearType(req.query.year, req.query.type);
  res.send(response);
});

// Get transactions based on Date and Type
function getDateType(date, type) {
  let query = `SELECT SUM(amount) FROM transactions WHERE date=? AND type=?`;
  let response = db.prepare(query).get(date, type);
  return response;
}

app.get("/datetype", (req, res) => {
  let response = getDateType(req.query.date, req.query.type);
  res.send(response);
});

// Get all unique values in the date columns
// Effectively returns all dates where transactions occurred
function getAllDates() {
  let query = `SELECT DISTINCT date FROM transactions WHERE year=2024`;
  let response = db.prepare(query).all();
  return response;
}

app.get("/alldates", (req, res) => {
  let response = getAllDates();
  res.json(response);
});

// Adds new transaction
function addNewTransaction(date, year, month, type, source, amount) {
  let query = `INSERT INTO transactions (date, year, month, type, source, amount) VALUES (?, ?, ?, ?, ?, ?)`;
  let response = db.prepare(query).run(date, year, month, type, source, amount);
  return response;
}

app.post("/newtransaction", (req, res) => {
  console.log(req.body);
  let date = req.body.date;
  let year = req.body.year;
  let month = req.body.month;
  let type = req.body.type;
  let source = req.body.source;
  let amount = req.body.amount;
  let response = addNewTransaction(date, year, month, type, source, amount);
  res.send(response);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

// Start express server
app
  .listen(3000, () => {
    console.log("Listening on port 3001");
  })
  .setTimeout(500000);
