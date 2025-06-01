import { JSX } from "react";

type StudyMethodsType = {
  name: string;
  description: string;
};

export default function ConceptSection(): JSX.Element {
  const studyMethods: StudyMethodsType[] = [
    {
      name: "Video",
      description:
        "Visual resources help break down complex concepts by presenting information in an engaging and dynamic way.",
    },
    {
      name: "Text",
      description:
        "Reading texts allow for in-depth exploration of topics, helping develop critical thinking and analytical skills.",
    },
    {
      name: "Notes",
      description:
        "Taking notes helps you organize and remember information. Use the copy button to save the summary instantly, or write your own notes by hand.",
    },
    {
      name: "Practice",
      description:
        "Applying knowledge through practical exercises helps to consolidate learning and identify areas that need reinforcement.",
    },
  ];

  return (
    <main className="w-[90vw] sm:w-[70vw] flex flex-col gap-12 justify-evenly items-center">
      <section className="flex flex-col justify-center items-center gap-4 w-full">
        <h2 className="cal-sans text-3xl text-center">
          What is the SoloDev Study Method?
        </h2>
        <p className="text-center text-lg">
          SoloDev is an approach designed to cater to the diverse ways in which
          people absorb knowledge. Instead of relying on a fixed learning style,
          this method emphasizes the power of combining different types of
          learning resources to enhance the educational process.
        </p>
      </section>

      <section className="flex flex-col sm:flex-row gap-8 justify-evenly items-center w-full">
        {studyMethods.map((method) => (
          <div
            className="w-full rounded-xl h-60 sm:h-70  border-2 px-4 flex flex-col gap-2 justify-center shadow-lg shadow-gray-300 items-center bg-white"
            key={method.name}
          >
            <h3 className="cal-sans text-3xl sm:text-2xl text-center">
              {method.name}
            </h3>
            <p className="text-lg sm:text-base text-center">
              {method.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
