"use client";

import { useState } from "react";

import EventsFilters from "@/components/events/filters/EventsFilters";

import ColumnsHeader from "@/components/events/ColumnsHeader";
import ColumnsItems from "@/components/events/ColumnsItems";

export default function Events({ events }) {
  const [filteredEvents, setFilteredEvents] = useState(events);

  return (
    <>
      <EventsFilters data={events} onFilter={setFilteredEvents}>
        <EventsFilters.Search />
        <EventsFilters.Tags />
        <EventsFilters.Priorities />
      </EventsFilters>

      <EventsBoard
        events={events}
        filteredEvents={filteredEvents}
      />
    </>
  );
}

const initialColumnState = {
  column: undefined,
  isLoading: false,
  count: undefined,
};

function EventsBoard({ events, filteredEvents }) {
  const [columnState, setColumnState] = useState(initialColumnState);

  /**
   * Adjusting the state when the createEventAction's
   * promise resolves.
   */
  if (columnState.count && (columnState.count !== events[columnState.column].length)) {
    /**
     * Resets the state, hiding the the skeleton 
     * previously shown from ColumnsHeader.
    */
    setColumnState(initialColumnState);
  }

  return (
    <div>
      <ColumnsHeader
        events={events}
        filteredEvents={filteredEvents}
        setColumnState={setColumnState}
      />

      <ColumnsItems
        events={events}
        filteredEvents={filteredEvents}
        columnState={columnState}
      />
    </div>
  );
}