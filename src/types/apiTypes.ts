export type GoogleResult = {
  title: string;
  link: string;
  snippet: string;
};

export type YoutubeVideo = {
  id: { videoId: string };
  snippet: { title: string };
};

export type AiContent = {
  summary: string;
  exercises: string[];
};

export type ApiResponse = {
  googleResults: GoogleResult[];
  youtubeVideo: YoutubeVideo;
  aiContent: AiContent;
};
