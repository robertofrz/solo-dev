import { JSX } from "react";

export default function Loading(): JSX.Element {
  return (
    <div className="mb-20 mt-30 w-[90vw] sm:w-[60vw] flex flex-col justify-between gap-10 items-center m-auto">
      <h2 className="text-3xl sm:text-3xl text-center cal-sans">
        Finding the best content to help you learn...
      </h2>

      {/* YouTube Placeholder */}
      <section className="flex flex-col items-start gap-4 animate-pulse">
        <div className="h-8 bg-gray-300 w-1/6 rounded-lg" />
        <div className="w-[90vw] sm:w-[60vw] aspect-video bg-gray-300 rounded-lg shadow-md" />
      </section>

      {/* Google Results Placeholder */}
      <section className="w-full space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 w-1/6 rounded-lg" />
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="border-2 shadow bg-white rounded-lg p-4 space-y-2"
          >
            <div className="h-4 bg-gray-300 w-2/3 rounded-lg" />
            <div className="h-3 bg-gray-200 w-full rounded-lg" />
          </div>
        ))}
      </section>

      {/* Notes Placeholder */}
      <section className="w-full space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 w-1/6 rounded-lg" />
        <div className="space-y-2 border-2 shadow bg-white rounded-lg p-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded-lg w-5/6" />
          ))}
        </div>
      </section>

      {/* Practice Placeholder */}
      <section className="w-full space-y-4 animate-pulse">
        <div className="h-6 bg-gray-300 w-1/6 rounded-lg" />
        <div className="space-y-2 border-2 shadow bg-white rounded-lg p-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded-lg w-5/6" />
          ))}
        </div>
      </section>
    </div>
  );
}
