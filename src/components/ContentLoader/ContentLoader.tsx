import { JSX } from "react";
import { ApiResponse } from "@/types/apiTypes";
import GoogleResultsSection from "./GoogleResults";
import YoutubeVideoSection from "./YoutubeVideo";
import AiContentSection from "./AiContent";

export type ContentLoaderProps = {
  topic: string;
};

export default async function ContentLoader({
  topic,
}: ContentLoaderProps): Promise<JSX.Element> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/topic?query=${encodeURIComponent(
      topic
    )}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) return <p>Failed to load content for {topic}.</p>;

  const { googleResults, youtubeVideo, aiContent }: ApiResponse =
    await res.json();

  return (
    <div className="flex flex-col items-center justify-evenly gap-20">
      <YoutubeVideoSection video={youtubeVideo} />
      <GoogleResultsSection results={googleResults} />
      <AiContentSection content={aiContent} />
    </div>
  );
}
