import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import eventsData from "../API/events.json";

const localizer = momentLocalizer(moment);

const eventColors = {
  "ATP 1000": "#CECE5A",
  "ATP 500": "#1F8A70",
  "ATP 250": "#E5BEEC",
  "Grand Slam": "#78C1F3",
  "Laver Cup": "#FCAEAE",
  "Wimbledon": "#CBFFA9"
};

const Schedule = () => {
  const events = eventsData.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  return (
    <div className="container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: eventColors[event.type],
          },
        })}
        resources={eventsData.map((event) => ({
          id: event.title,
          title: event.location,
        }))}
        resourceIdAccessor="title"
        resourceTitleAccessor="title"
      />
    </div>
  );
};

export default Schedule;
