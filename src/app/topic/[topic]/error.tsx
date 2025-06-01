"use client";
import { JSX } from "react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    console.error("Erro capturado:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="cal-sans text-3xl font-bold mb-4">Something went wrong</h1>
      <p className="montserrat mb-6 text-gray-600">
        We could not load this page. Please try again.
      </p>
      <button onClick={() => reset()} className="custom-button">
        Try Again
      </button>
    </div>
  );
}
