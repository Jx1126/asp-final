import { useState } from "react";
import FinanceHero from "./FinanceHero";
import BudgetInput from "./BudgetInput";
import FinanceCalendar from "./FinanceCalendar";
import TransactionInput from "./TransactionInput";

function Finance() {
  const [budget, setBudget] = useState(0);

  function onSaveBudget(newBudget) {
    setBudget(newBudget);
  }

  return (
    <div>
      <FinanceHero />
      <TransactionInput />
      <BudgetInput onSaveBudget={onSaveBudget} />
      <FinanceCalendar budget={budget} />
    </div>
  );
}

export default Finance;
