import { GoogleResult } from "@/types/apiTypes";

export type GoogleApiResponse = {
  items?: GoogleResult[];
};

export async function fetchGoogleResults(
  query: string
): Promise<GoogleResult[]> {
  const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY!;
  const GOOGLE_CSE_ID = process.env.GOOGLE_CSE_ID!;
  const enrichedQuery = `${query} tutorial OR documentation OR guide`;

  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
      enrichedQuery
    )}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CSE_ID}&num=3`
  );

  const data: GoogleApiResponse = await res.json();
  return data.items || [];
}
