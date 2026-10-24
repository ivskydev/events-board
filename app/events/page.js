import { Suspense } from "react";

import { getEvents } from "@/lib/http";
import Events from "@/components/events/Events";
import EventsSkeleton from "@/components/skeletons/EventsSkeleton";

export const metadata = {
  title: 'Events',
  Description: 'Events homepage',
};

export default function EventsPage() {
  return (
    <div className="max-w-[1200px] h-screen flex flex-col space-y-5 px-5 py-10 mx-auto">
      <Suspense fallback={<EventsSkeleton />}>
        <LoadEvents />
      </Suspense>
    </div>
  );
}

async function LoadEvents() {
  const data = await getEvents();
  return <Events events={data} />
}