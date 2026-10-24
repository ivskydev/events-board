"use client";

import Link from "next/link";

import UpdateEventForm from "./UpdateEventForm";

import {
  defaultPriorities,
} from "@/assets/dummy-data";

import {
  CalendarCheck,
  ArrowLeft,
} from "lucide-react";

import DeleteEventForm from "@/components/events/DeleteEventForm";

export default function Event({ event }) {
  const priority = defaultPriorities[event.priority];

  return (
    <div className="w-full h-screen flex flex-col items-center p-8 bg-slate-50">
      <div className="max-w-[450px] w-[450px] p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-8 bg-rose-30">
          <Link
            href="/events"
            className="w-auto inline-flex items-center gap-x-1 text-slate-600 hover:text-slate-500 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back</span>
          </Link>

          <DeleteEventForm event={event} />
        </div>

        <h1 className="mb-5 flex items-center space-x-2">
          <div className="w-8 h-8 flex items-center justify-center bg-white shadow-md border border-slate-200 rounded-full">
            <CalendarCheck className="text-violet-500" size={18} />
          </div>
          <span className="text-xl font-medium leading-tight text-slate-800">
            Event: {event.title}
          </span>
        </h1>

        <div className="mb-2 flex items-center justify-between">
          <span
            className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full"
          >
            {event.tag}
          </span>

          <span
            className={`px-3 py-1 text-xs font-medium ${priority.color} ${priority.bg} rounded-full`}
          >
            {priority.label}
          </span>
        </div>

        <UpdateEventForm event={event} />
      </div>
    </div>
  );
}