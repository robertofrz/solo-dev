import { AiContent } from "@/types/apiTypes";
import CopyButton from "../LayoutComponents/CopyButton";
import { JSX } from "react";

type AiContentProps = {
  content: AiContent;
};
export default function AiContentSection({
  content,
}: AiContentProps): JSX.Element {
  return (
    <>
      {/* Summary */}
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <h2 className="text-2xl cal-sans self-start">Notes</h2>
        <p className="border-2 shadow-lg shadow-gray-300 bg-white rounded-lg p-4 whitespace-pre-wrap montserrat">
          {content?.summary || "No summary available."}
        </p>
        {content?.summary && <CopyButton content={content.summary} />}
      </div>

      {/* Exercises */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl cal-sans">Practice</h2>
        {content?.exercises?.length > 0 ? (
          <ol className="list-decimal list-inside space-y-4 montserrat">
            {content.exercises.map((ex, idx) => (
              <li
                key={idx}
                className="border-2 shadow-lg shadow-gray-300 bg-white rounded-lg p-4"
              >
                {ex}
              </li>
            ))}
          </ol>
        ) : (
          <p>No exercises available.</p>
        )}
      </div>
    </>
  );
}
