import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import financeHero from "/finance_hero.png?url";
import { useState } from "react";
import { startOfYear, endOfYear, eachDayOfInterval } from "date-fns";

const localizer = momentLocalizer(moment);

// Hero Component
function FinanceHero() {
  return (
    <section className="relative w-auto h-auto">
      <img src={financeHero} alt="Hero image" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our In-built Finance Calculator
          </h1>
          <p className="text-lg mt-3 md:text-xl">
            Keep track of and gain insight over your finances!
          </p>
        </div>
      </div>
    </section>
  );
}

// Budget Slider Component
interface Props {
  onSaveBudget: (budget: number) => void;
}

function BudgetSlider({ onSaveBudget }: Props) {
  const [budget, setBudget] = useState(0);
  const [budgetSaved, setBudgetSaved] = useState(false);

  function handleSliderChange(sliderEvent) {
    setBudget(Number(sliderEvent.target.value));
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

// Calendar Component

interface Props {
  budget: number;
}

function FinanceCalendar({ budget }: Props) {
  function getYearArray(date) {
    let yearStart = startOfYear(todayDate);
    let yearEnd = endOfYear(todayDate);

    let currentYearArray = eachDayOfInterval({
      start: yearStart,
      end: yearEnd,
    });

    return currentYearArray;
  }

  function generateEventArray(dateRange) {
    let eventArray = [];
    for (let i = 0; i < dateRange.length; i++) {
      let day = {
        title: Math.floor(
          (budget * 12) / dateRange.length - Math.floor(Math.random() * 1000)
        ),
        start: dateRange[i],
        end: dateRange[i],
        allDay: false,
      };
      eventArray.push(day);
    }
    return eventArray;
  }

  function eventColour(event) {
    let backgroundColor;
    if (event.title < 0) {
      backgroundColor = "red";
    } else {
      backgroundColor = "green";
    }
    return { style: { backgroundColor } };
  }

  let todayDate = new Date();
  let yearArray = getYearArray(todayDate);
  let events = generateEventArray(yearArray);

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={["month"]}
        eventPropGetter={eventColour}
      />
    </>
  );
}

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
