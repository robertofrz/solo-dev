import CallToActionSection from "@/components/MainPageSections/CallToActionSection";
import HeroSection from "@/components/MainPageSections/HeroSection";
import ConceptSection from "@/components/MainPageSections/ConceptSection";
import { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="w-[85vw] sm:w-[70vw] montserrat m-auto mt-15 flex flex-col items-center justify-between gap-10">
      <HeroSection />
      <ConceptSection />
      <CallToActionSection />
    </main>
  );
}
