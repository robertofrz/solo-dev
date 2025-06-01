import ContentLoader from "@/components/ContentLoader/ContentLoader";
import { JSX } from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const { topic } = await params;
  const decodedTopic = decodeURIComponent(topic).toLowerCase();

  return {
    title: `${decodedTopic} | SoloDev`,
    description: `Explore study content and practical exercises on ${decodedTopic} with SoloDev.`,
  };
}

export default async function TopicContent({
  params,
}: {
  params: { topic: string };
}): Promise<JSX.Element> {
  const { topic } = await params;

  return (
    <section className="mb-20 mt-30 w-[90vw] sm:w-[60vw] flex flex-col justify-evenly gap-8 items-center m-auto">
      <h2 className="text-3xl sm:text-4xl text-center cal-sans">
        Hands-On Learning <br /> {decodeURIComponent(topic).toUpperCase()}
      </h2>

      <ContentLoader topic={topic} />
    </section>
  );
}
