"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function EventCardSkeleton() {
  return (
    <div className="w-full space-y-5 p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between gap-x-2">
        <Skeleton className="w-28 h-6 bg-slate-200 rounded-full" />
        <Skeleton className="w-14 h-6 bg-slate-200 rounded-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="max-w-56 h-3 bg-slate-200 rounded-full" />
        <Skeleton className="w-full h-3 bg-slate-200 rounded-full" />
        <Skeleton className="max-w-28 h-3 bg-slate-200 rounded-full" />
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Skeleton className="w-10 h-5 bg-slate-200 rounded-full" />
        <Skeleton className="w-10 h-5 bg-slate-200 rounded-full" />
      </div>
    </div>
  );
}