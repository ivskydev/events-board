"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function EventsSkeleton() {
  return (
    <div className="w-full h-screen flex flex-col items-center p-8 bg-slate-50">
      <div className="max-w-[450px] w-[450px] space-y-8 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between">
          <Skeleton className="w-12 h-[20px] rounded-lg" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between mb-5">
            <Skeleton className="w-28 h-8 rounded-full" />
            <Skeleton className="w-20 h-8 rounded-full" />
          </div>
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-80 h-[15px] rounded" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-80 h-[15px] rounded" />
          <Skeleton className="w-full h-[80px] rounded-md" />
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-80 h-[30px] rounded" />
        </div>

        <div className="space-y-2">
          <Skeleton className="w-full h-[80px] rounded-md" />
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-full h-[15px] rounded" />
          <Skeleton className="w-80 h-[15px] rounded" />
        </div>

        <div className="flex justify-between">
          <Skeleton className="w-24 h-[40px] rounded-lg" />
          <Skeleton className="w-24 h-[40px] rounded-lg" />
        </div>
      </div>
    </div>
  );
}