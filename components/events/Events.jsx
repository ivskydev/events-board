"use client";

import { useMemo, useState } from "react";

import EventColumn from "@/components/events/EventColumn";
import EventsFilters from "@/components/events/filters/EventsFilters";

export default function Events({ events }) {
  const [filteredEvents, setFilteredEvents] = useState(events);

  /**
   * Preventive memoization, considering unlimited 
   * number of columns, events and future side effects.
   */
  const MemoizedEventColumns = useMemo(() => {
    return (
      Object.keys(events).map(column => (
        <EventColumn
          key={column}
          column={column}
          events={events[column]}
          filteredEvents={filteredEvents[column]}
        />
      ))
    );
  }, [filteredEvents, events.length]);

  return (
    <>
      <EventsFilters data={events} onFilter={setFilteredEvents}>
        <EventsFilters.Search />
        <EventsFilters.Tags />
        <EventsFilters.Priorities />
      </EventsFilters>

      <div className="h-full pb-10 grid grid-cols-4 gap-3">
        {MemoizedEventColumns}
      </div>
    </>
  );
}