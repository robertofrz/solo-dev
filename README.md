# SoloDev Documentation

SoloDev is an AI-powered learning platform designed to help users explore and master software development topics in a simple, efficient, and structured way. It integrates curated YouTube tutorials, Google search results, AI-generated summaries, and practice questions into a seamless learning experience.

---

## Features

- Search any topic and receive:
  - A relevant YouTube tutorial
  - Top Google search results (official docs, articles)
  - AI-generated summary (copyable and editable)
  - Practice questions for retention
- Fast and secure authentication with Clerk
- Server-side caching for fast API response
- Clean light-mode UI optimized for learning

---

## How It Works

### 1. Authentication

- Users sign in via Clerk.
- Only authenticated users can access `/search` and `/topic/[topic]`.

### 2. Search Flow

- Users visit `/search`.
- After submitting a search, they are redirected to `/topic/[topic]`.
- The topic parameter is used to fetch content from external APIs.

### 3. API Integration & Server-Side Fetching

- APIs used: YouTube, Google Custom Search, OpenAI.
- All requests are routed through `/api/topic?query=...`.
- Core server utilities:
  - `fetchGoogleResults.ts`
  - `fetchYoutubeVideo.ts`
  - `generateAiContent.ts`

### 4. Caching

- Server response headers:  
  `Cache-Control: public, s-maxage=300, stale-while-revalidate=59`
- Client-side fetch:  
  `fetch(..., { next: { revalidate: 300 } });`
- Cache Time-to-Live (TTL): 5 minutes.

### 5. Protected Routes

- Clerk middleware protects the following routes:
  - `/search`
  - `/topic/[topic]`

---

## User Experience & Pedagogical Design

- **Video**: visual reinforcement
- **Text links**: access to in-depth resources
- **Notes**: users can copy AI summaries or write their own
- **Practice**: improve retention with quizzes

Users are encouraged to copy or export summaries using the copy button.

---

## Project Structure

/app
  /search
  /topic/[topic]
  /api/topic
/components
  /ContentLoader (AiContent, GoogleResults, YoutubeVideo)
  /LayoutComponents (Header, Footer, etc.)
  /MainPageSections (Hero, Concept, CTA)
/lib
  fetchGoogleResults.ts
  fetchYoutubeVideo.ts
  generateAiContent.ts
/styles
/types
middleware.ts


---

## Tech Stack

- [Next.js 15 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk.dev](https://clerk.dev/)
- [OpenAI API](https://platform.openai.com/)
- [YouTube Data API](https://developers.google.com/youtube/)
- [Google Custom Search API](https://programmablesearchengine.google.com/)

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/robertofrz/solo-dev.git  

# Navigate into the directory
cd solo-dev

# Install dependencies
npm install

# Start the development server
npm run dev


Possible Improvements

- Add user history and saved searches
- Support editable personal notes
- Add support for dark mode
- Internationalization (i18n)

License
This project is licensed under the MIT License.
(Include the LICENSE file in the project root.)

Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

This document is also available in [Português 🇧🇷](./README.pt.md)

