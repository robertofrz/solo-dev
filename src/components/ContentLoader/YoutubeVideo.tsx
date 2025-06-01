import { YoutubeVideo } from "@/types/apiTypes";
import { JSX } from "react";

type YoutubeVideoSectionProps = {
  video: YoutubeVideo;
};

export default function YoutubeVideoSection({
  video,
}: YoutubeVideoSectionProps): JSX.Element {
  return video ? (
    <div className="flex flex-col gap-4 w-[90vw] sm:w-[60vw]">
      <h2 className="text-2xl cal-sans">Video</h2>
      <iframe
        loading="lazy"
        className="w-full rounded-xl aspect-video shadow-gray-300 shadow-lg"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        title={video.snippet.title}
        allowFullScreen
      />
    </div>
  ) : (
    <p>No YouTube video found.</p>
  );
}
