import Link from "next/link";

import ErrorLayout from "@/components/ErrorLayout";

export default function NotFound() {
  return (
    <ErrorLayout>
      <div>
        <h1 className="font-extrabold text-9xl text-slate-700">
          <span className="sr-only">Error</span>404
        </h1>

        <p className="mb-7 text-2xl font-semibold md:text-3xl">
          Event Not Found!
        </p>

        <Link
          href="/events"
          className="px-8 py-3 font-semibold rounded bg-pink-500 text-white"
        >
          Back to events
        </Link>
      </div>
    </ErrorLayout>
  );
}