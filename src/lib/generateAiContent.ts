import OpenAI from "openai";
import { AiContent } from "@/types/apiTypes";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generateAiContent(topic: string): Promise<AiContent> {
  const prompt = `
Topic: "${topic}"

1. Write an ACADEMIC SUMMARY of the topic in no more than 200 words. Use clear and objective language. Structure the summary as a list of concise bullet points (4 to 6 points maximum). 
Each point should convey one key idea or concept that is important to understand the topic.

2. Then, generate a LIST of 3 PRACTICAL CODING EXERCISES to help reinforce the topic. Each exercise should include simple, clear instructions.

Respond in the following format:

Summary:
[your summary here]

Exercises:
1. ...
2. ...
3. ...
`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5,
  });

  const fullText = response.choices[0].message.content ?? "";

  // Extracts everything between "Summary:" and "Exercises:"
  // [\s\S]*? is a non-greedy match for any character including line breaks
  const [, summaryMatch] =
    fullText.match(/Summary:\s*([\s\S]*?)\n+Exercises:/) || [];

  // Extracts everything after "Exercises:"
  const [, exercisesMatch] = fullText.match(/Exercises:\s*([\s\S]*)/) || [];

  let exercises: string[] = [];

  if (exercisesMatch) {
    // Splits text by line breaks followed by a number and a dot (e.g., "\n1. ", "\n2. ")
    exercises = exercisesMatch
      .trim()
      .split(/\n\d+\.\s+/)
      .map((ex) => ex.trim())
      .filter(Boolean);

    // Removes "1. " from the beginning of the first exercise if still present
    if (exercises.length > 0 && exercises[0].startsWith("1. ")) {
      exercises[0] = exercises[0].slice(3).trim();
    }
  }

  return {
    summary: summaryMatch?.trim() || "Summary not found.",
    exercises,
  };
}
