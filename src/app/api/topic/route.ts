import { NextRequest, NextResponse } from "next/server";
import { fetchGoogleResults } from "@/lib/fetchGoogleResults";
import { fetchYoutubeVideo } from "@/lib/fetchYoutubeVideo";
import { generateAiContent } from "@/lib/generateAiContent";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  try {
    const [googleResults, youtubeVideo, aiContent] = await Promise.all([
      fetchGoogleResults(query),
      fetchYoutubeVideo(query),
      generateAiContent(query),
    ]);

    return NextResponse.json(
      { googleResults, youtubeVideo, aiContent },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=59",
        },
      }
    );
  } catch (error: unknown) {
    console.error("Error in /api/topic:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
