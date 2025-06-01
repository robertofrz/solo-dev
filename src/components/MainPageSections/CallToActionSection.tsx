import GetStartedButton from "../LayoutComponents/GetStartedButton";
import Image from "next/image";
import { JSX } from "react";

export default function CallToActionSection(): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-4 justify-center w-[90vw] sm:w-[70vw] h-[90vh] mt-10">
      <Image src="/study.png" alt="laptop image" width={150} height={150} />
      <p className="text-center text-xl mb-4">
        SoloDev offers a complete and flexible approach for self-taught
        developers. Learn your way with the best resources and accelerate your
        progress. Start now and transform your learning journey.
      </p>

      <GetStartedButton />
    </div>
  );
}
