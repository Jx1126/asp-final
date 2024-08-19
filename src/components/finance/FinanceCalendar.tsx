import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startOfYear, endOfYear, eachDayOfInterval } from "date-fns";

const localizer = momentLocalizer(moment);

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

export default FinanceCalendar;
