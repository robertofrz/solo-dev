import { GoogleResult } from "@/types/apiTypes";
import { JSX } from "react";

type GoogleResultsProps = {
  results: GoogleResult[];
};
export default function GoogleResultsSection({
  results,
}: GoogleResultsProps): JSX.Element {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl cal-sans">Text</h2>
      {results.length > 0 ? (
        results.map((result) => (
          <a
            key={result.link}
            href={result.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 shadow-lg shadow-gray-300 bg-white rounded-lg p-4 hover:bg-neutral-100 transition montserrat"
          >
            <h3 className="font-semibold">{result.title}</h3>
            <p className="text-sm text-gray-600 ">{result.snippet}</p>
          </a>
        ))
      ) : (
        <p>No Google results found.</p>
      )}
    </div>
  );
}
