import React from "react";
import { useState } from "react";
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
  Wimbledon: "#CBFFA9",
};
const filterOptions = [
  { label: "All", value: "All" },
  { label: "Grand Slam", value: "Grand Slam" },
  { label: "ATP 1000", value: "ATP 1000" },
  { label: "ATP 500", value: "ATP 500" },
  { label: "ATP 250", value: "ATP 250" },
  { label: "Laver Cup", value: "Laver Cup" }
];

const Schedule = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const events = eventsData.map((event) => ({
    ...event,
    start: new Date(event.start),
    end: new Date(event.end),
  }));

  const filteredEvents =
    selectedFilter === "All"
      ? events
      : events.filter((event) => event.type === selectedFilter);

  return (
    <div className="container" style={{display:"flex"}}>
      <div className="filter-options">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => handleFilterChange(option.value)}
            className={selectedFilter === option.value ? "active" : ""}
            style={{display:"flex", marginRight:"50px"}}
            className="btn"
          >
            {option.label}
          </button>
        ))}
      </div>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
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
