import { useState } from "react";

interface Props {
  onSaveBudget: (budget: number) => void;
}

function BudgetSlider({ onSaveBudget }: Props) {
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
      <div className="flex flex-row justify-center align-center">
        <p>Selected Budget: {budget}</p>
        <div className="w-1/2">
          <input
            type="range"
            min="0"
            max="20000"
            className="range range-primary"
            onChange={handleSliderChange}
          />
          <a className="btn btn-primary text-lg" onClick={handleButtonClick}>
            Set Monthly Budget
          </a>

          {budgetSaved && <p>Monthly Budget of {budget} Set!</p>}
        </div>
      </div>
    </>
  );
}

export default BudgetSlider;
