import { Suspense } from "react";

import { notFound } from "next/navigation";

import { getEvent } from "@/lib/http";
import Event from "@/components/events/Event";
import EventsSkeleton from "@/components/skeletons/EventSkeleton";

export async function generateMetadata({ params }) {
  const event = await getEvent(params.slug);

  if (!event) {
    notFound();
  }

  return {
    title: event.title,
    description: event.desc,
  };
};

export default function EventPage({ params }) {
  return (
    <>
      <Suspense fallback={<EventsSkeleton />}>
        <LoadEvent id={params.slug} />
      </Suspense>
    </>
  );
}

async function LoadEvent({ id }) {
  const event = await getEvent(id);

  if (!event) {
    notFound();
  }

  return <Event event={event} />;
}