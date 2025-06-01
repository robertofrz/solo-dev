import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/LayoutComponents/Footer";
import Header from "@/components/LayoutComponents/Header";

export const metadata: Metadata = {
  title: "SoloDev",
  description:
    "Master programming topics at your own pace with clear explanations. Get AI-generated summaries, practical exercises, documentation links, and helpful videos — all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-neutral-100">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
