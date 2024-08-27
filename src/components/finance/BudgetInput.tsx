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
      <div className="flex justify-center items-center flex-col">
        <div className="w-1/3 p-10 pb-0">
          <div className="flex justify-center gap-2 !mb-0">
            <input
              type="number"
              placeholder="Monthly Budget"
              className="input input-bordered w-full max-w-xs"
              onChange={handleSliderChange}
            />
            <a className="btn btn-primary text-lg" onClick={handleButtonClick}>
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
