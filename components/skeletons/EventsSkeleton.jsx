"use client";

import { Skeleton } from "@/components/ui/skeleton";
import EventCardSkeleton from "@/components/skeletons/EventCardSkeleton";
export default function EventsSkeleton() {
  return (
    <div className="h-full flex flex-col space-y-5">
      <div className="flex justify-between">
        <Skeleton className="w-72 h-10 rounded-full" />
        <Skeleton className="w-72 h-10 rounded-md" />
      </div>

      <div className="h-full pb-10 grid grid-cols-4 gap-3">
        <div className="bg-white space-y-3">
          <Skeleton className="h-10 rounded-md" />

          <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50/65 rounded-lg">
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        </div>

        <div className="bg-white space-y-3">
          <Skeleton className="h-10 rounded-md" />

          <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50/65 rounded-lg">
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        </div>

        <div className="bg-white space-y-3">
          <Skeleton className="h-10 rounded-md" />

          <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50/65 rounded-lg">
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        </div>

        <div className="bg-white space-y-3">
          <Skeleton className="h-10 rounded-md" />

          <div className="h-full flex flex-col gap-y-2.5 p-2 bg-slate-50/65 rounded-lg">
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}