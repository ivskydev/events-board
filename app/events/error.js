"use client";

import ErrorLayout from "@/components/ErrorLayout";

import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  return (
    <ErrorLayout>
      <div>
        <h1 className="font-extrabold text-9xl text-slate-700">
          <span className="sr-only">Error</span>500
          <p className="text-2xl">Something went wrong!</p>
        </h1>

        <p className="mb-7 text-2xl font-semibold md:text-3xl">
          {error?.message}
        </p>

        <Button
          onClick={() => reset()}
          className="px-8 py-2 font-semibold rounded bg-pink-500 text-white"
        >
          Try again
        </Button>
      </div>
    </ErrorLayout>
  );
}