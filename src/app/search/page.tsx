"use client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function SearchPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/topic/${encodeURIComponent(searchTerm.trim())}`);
    } else {
      alert("Please enter a topic.");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <main className="w-[85vw] min-h-screen sm:w-[60vw] montserrat m-auto flex justify-center items-center">
      <section className="w-full flex flex-col items-center gap-8 justify-center">
        <h1 className="cal-sans text-4xl sm:text-5xl text-center">SoloDev</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-[70%] flex flex-col justify-center items-center gap-4"
        >
          <label htmlFor="topicInput" className="sr-only">
            Enter a topic to learn
          </label>
          <input
            id="topicInput"
            type="text"
            placeholder="What do you want to learn today?"
            className="border-2 border-black rounded-full text-gray-600 p-4 w-full bg-white shadow-lg shadow-gray-300"
            value={searchTerm}
            onChange={handleChange}
            aria-label="Topic to learn"
          />
          <button type="submit" className="custom-button">
            Explore Topic
          </button>
        </form>
      </section>
    </main>
  );
}
