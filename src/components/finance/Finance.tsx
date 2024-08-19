import { useState } from "react";
import FinanceHero from "./FinanceHero";
import BudgetSlider from "./BudgetSlider";
import FinanceCalendar from "./FinanceCalendar";

function Finance() {
  const [budget, setBudget] = useState(0);

  function onSaveBudget(newBudget) {
    setBudget(newBudget);
  }

  return (
    <div>
      <FinanceHero />
      <BudgetSlider onSaveBudget={onSaveBudget} />
      <FinanceCalendar budget={budget} />
    </div>
  );
}

export default Finance;
