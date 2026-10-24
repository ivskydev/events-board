"use client";

import { useState, memo } from "react";

import Link from "next/link";

import NewEvent from "@/components/events/NewEvent";
import EventCardSkeleton from "@/components/skeletons/EventCardSkeleton";

import { Button } from "@/components/ui/button";

import {
  MoreVertical,
  Paperclip,
  MessageCircle,
  CalendarOff,
} from "lucide-react";

import { defaultColumns, defaultPriorities } from "@/assets/dummy-data";

function EventColumn({ column, events, filteredEvents }) {
  const columnTheme = defaultColumns[column];
  const hasEvents = filteredEvents.length > 0;
  const totalEventsCount = events.length;

  const [columnState, setColumnState] = useState({
    isLoading: false,
    count: totalEventsCount,
  });

  /**
   * Adjusting the state when events come back
   * from the server. If the current column has
   * more events than before, then the skeleton
   * is already showing up and we need to remove 
   * it, by updating the state.
   * 
   * We could've pass the column and the new
   * event id from setColumnState, but we don't
   * need this specificity: just need to know that
   * "a" event was created not "the" event.
  */
  if (columnState.count < totalEventsCount) {
    setColumnState({
      isLoading: false,
      count: totalEventsCount
    });
  }

  return (
    <div className="h-full bg-white">
      <div className={`flex justify-between pl-4 pr-3 py-2 mb-2 rounded-lg ${columnTheme.bg}`}>
        <div className="flex items-center gap-x-1">
          <span className={`text-[0.9rem] font-medium ${columnTheme.color}`}>
            {columnTheme.label}
          </span>
          <small className={`w-5 h-5 flex items-center justify-center leading-none text-[0.7rem] font-bold rounded-full ${columnTheme.count.color} ${columnTheme.count.bg}`}>
            {filteredEvents.length}
          </small>
        </div>
        <div className="flex items-center justify-end gap-x-2 text-slate-500">
          <NewEvent
            column={column}
            onLoadingNewEvent={(isLoading) => {
              setColumnState(prev => ({ ...prev, isLoading }));
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

      <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50 rounded-lg">
        {columnState.isLoading && <EventCardSkeleton />}

        {hasEvents ? (
          filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div className="h-[178px] p-4 flex flex-col items-center justify-center bg-white rounded-lg shadow">
            <small className="text-slate-500">No events</small>
            <CalendarOff size="70" className="stroke-slate-200" />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(EventColumn);

function EventCard({ event }) {
  const priorityTheme = defaultPriorities[event.priority];

  return (
    <Link href={`/events/${event.id}`} className="p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between gap-x-2">
        <span className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full">{event.tag}</span>
        <span className={`px-3 py-1 text-xs font-medium ${priorityTheme.color} ${priorityTheme.bg} rounded-full`}>{priorityTheme.label}</span>
      </div>
      <div className="mt-4 mb-1.5 font-medium text-slate-800">{event.title}</div>
      <div className="text-sm text-slate-400">{event.desc}</div>
      <div className="mt-5 flex items-center justify-end gap-x-4 text-slate-500">
        <div className="flex items-center gap-x-1">
          <Paperclip size="16" />
          <small className="text-xs text-slate-600">{event.attachments.length}</small>
        </div>

        <div className="flex items-center gap-x-1">
          <MessageCircle size="16" />
          <small className="text-xs text-slate-600">{event.comments.length}</small>
        </div>
      </div>
    </Link>
  );
}