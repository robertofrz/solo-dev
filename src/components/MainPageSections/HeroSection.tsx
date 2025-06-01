import GetStartedButton from "../LayoutComponents/GetStartedButton";
import { JSX } from "react";
export default function HeroSection(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-8 justify-center mb-10 w-[90vw] sm:w-[70vw] h-[90vh]">
      <h1 className="cal-sans text-5xl text-center">SoloDev</h1>
      <p className="text-center text-lg mb-6">
        SoloDev is a platform designed to help self-taught developers learn more
        efficiently by integrating four essential learning methods:{" "}
        <b>Videos</b>, <b>Texts</b>, <b>Notes</b>, and <b>Practice</b>. Our
        approach allows you to combine different sources of content in one
        place, so you can absorb knowledge in various ways and according to your
        learning style.
      </p>

      <GetStartedButton />
    </div>
  );
}
