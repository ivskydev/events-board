"use client";

import NewEvent from "@/components/events/NewEvent";

import { Button } from "@/components/ui/button";

import {
  MoreVertical,
} from "lucide-react";

import { defaultColumns } from "@/assets/dummy-data";

export default function ColumnsHeader({ events, filteredEvents, setColumnState }) {
  const columns = Object.keys(events);

  return (
    <div className="h-auto pb-1 grid grid-cols-4 gap-3">
      {columns.map(column => {
        const columnTheme = defaultColumns[column];
        const eventsCount = events[column].length;
        const filteredEventsCount = filteredEvents[column].length;

        return (
          <div key={column} className={`flex justify-between pl-4 pr-3 py-2 mb-2 rounded-lg ${columnTheme.bg}`}>
            <div className="flex items-center gap-x-1">
              <span className={`text-[0.9rem] font-medium ${columnTheme.color}`}>
                {columnTheme.label}
              </span>
              <small className={`w-5 h-5 flex items-center justify-center leading-none text-[0.7rem] font-bold rounded-full ${columnTheme.count.color} ${columnTheme.count.bg}`}>
                {filteredEventsCount}
              </small>
            </div>
            <div className="flex items-center justify-end gap-x-2 text-slate-500">
              <NewEvent
                column={column}
                onLoadingNewEvent={(isLoading) => {
                  /** 
                   * Updates the parent state, showing a skeleton, right
                   * after creating a new event.
                   */
                  setColumnState({ column, isLoading, count: eventsCount, });
                }}
              />

              <Button
                variant="ghost"
                className="h-auto p-0 hover:text-slate-600 hover:bg-transparent"
              >
                <MoreVertical size="20" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}