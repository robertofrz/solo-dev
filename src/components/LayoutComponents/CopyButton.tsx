"use client";
import { JSX } from "react";
type Props = {
  content: string;
};

export default function CopyButton({ content }: Props): JSX.Element {
  function handleCopy() {
    navigator.clipboard.writeText(content);
  }

  return (
    <button className="custom-button" onClick={handleCopy}>
      Copy Notes
    </button>
  );
}
