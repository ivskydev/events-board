"use client";

import Link from "next/link";

import EventCardSkeleton from "@/components/skeletons/EventCardSkeleton";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Paperclip,
  MessageCircle,
  CalendarOff,
} from "lucide-react";

import { defaultPriorities } from "@/assets/dummy-data";

export default function ColumnsItems({ events, filteredEvents, columnState }) {
  const columns = Object.keys(events);

  return (
    <div className="relative">
      <ScrollArea className="h-screen max-h-[calc(100vh-180px)] w-full rounded-md [&>[data-radix-scroll-area-viewport]>div]:!block">
        <div className="h-full grid grid-cols-4 gap-3">
          {columns.map(column => {
            const isLoading = columnState.column === column;
            const hasEvents = filteredEvents[column].length > 0;

            return (
              <div key={column} className="h-full bg-white">
                <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50 rounded-lg">
                  {isLoading && <EventCardSkeleton />}

                  {hasEvents ? (
                    filteredEvents[column].map(event => (
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
          })}
        </div>
      </ScrollArea>
    </div>
  );
}

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