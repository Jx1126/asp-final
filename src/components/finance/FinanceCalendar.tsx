import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startOfYear, endOfYear, eachDayOfInterval } from "date-fns";
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

const URL = "http://localhost:3001";

interface Props {
  budget: number;
}

function FinanceCalendar({ budget }: Props) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let allDates = await getAllDates();

        const newEvents = await Promise.all(
          allDates.map(async (date) => {
            let dateString = date.date;
            let dateObject = new Date(dateString);
            let dateExpense = await getDateType(dateString, "Expense");
            return {
              title: budget - dateExpense,
              start: dateObject,
              end: dateObject,
              allDay: false,
            };
          })
        );

        setEvents(newEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle the error appropriately, e.g., show an error message to the user
      }
    };

    fetchEvents();
  }, [budget]); // Re-fetch events when the budget changes

  function eventColour(event: Event) {
    let backgroundColor;
    if (event.title < 0) {
      backgroundColor = "#f28482";
    } else {
      backgroundColor = "#90a955";
    }
    return { style: { backgroundColor } };
  }

  async function getDateType(date: string, type: string) {
    let urlString = encodeURI(`${URL}/datetype?date=${date}&type=${type}`);
    let data = await fetch(urlString);
    let response = await data.json();
    return response["SUM(amount)"] || 0; // Handle potential null values
  }

  async function getAllDates() {
    let urlString = `${URL}/alldates`;
    let data = await fetch(urlString);
    let response = await data.json();
    return response;
  }

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "70vh", minHeight: "400px" }}
        views={["month"]}
        eventPropGetter={eventColour}
      />
    </>
  );
}

export default FinanceCalendar;
