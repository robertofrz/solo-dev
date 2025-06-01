import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bottom-0 w-full h-12 border-t-2 border-black flex justify-center items-center">
      <p className=" montserrat text-sm">
        &copy; {new Date().getFullYear()} SoloDev. All Rights Reserved.
      </p>
    </footer>
  );
}
