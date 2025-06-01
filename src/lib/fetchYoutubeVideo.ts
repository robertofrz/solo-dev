import { YoutubeVideo } from "@/types/apiTypes";

export type YoutubeApiResponse = {
  items: YoutubeVideo[];
};

export async function fetchYoutubeVideo(query: string): Promise<YoutubeVideo> {
  const YOUTUBE_API_KEY = process.env.GOOGLE_API_KEY!;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
      query
    )}&key=${YOUTUBE_API_KEY}&maxResults=1&type=video`
  );

  const data: YoutubeApiResponse = await res.json();
  return data.items?.[0] || null;
}
