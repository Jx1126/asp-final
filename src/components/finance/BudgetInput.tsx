import { useState } from "react";

interface Props {
  onSaveBudget: (budget: number) => void;
}

function BudgetInput({ onSaveBudget }: Props) {
  const [budget, setBudget] = useState(0);
  const [budgetSaved, setBudgetSaved] = useState(false);

  function handleSliderChange(sliderEvent) {
    setBudget(Number(sliderEvent.target.value));
    setBudgetSaved(false);
  }

  function handleButtonClick() {
    onSaveBudget(budget);
    setBudgetSaved(true);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col mx-5">
        <div className="w-full max-w-xs mt-8">
          <div className="flex items-center gap-2 flex-col md:flex-row">
            <input
              type="number"
              placeholder="Monthly Budget"
              className="input input-bordered w-full md:w-auto"
              onChange={handleSliderChange}
            />
            <a className="btn btn-primary text-lg w-full md:w-auto" onClick={handleButtonClick}>
              Set Monthly Budget
            </a>
          </div>
        </div>
        {budgetSaved && <p className="font-semibold text-green-600 mt-5">Monthly Budget of {budget} Set!</p>}
      </div>
    </>
  );
}

export default BudgetInput;
