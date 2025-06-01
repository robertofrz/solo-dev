import NavButtons from "./NavButtons";
import Link from "next/link";
import { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="border-black border-b-2 h-20 left-0 fixed top-0 w-full z-50 flex justify-between items-center bg-gray-100">
      <Link href="/">
        <h1 className="ml-6 text-3xl cal-sans">SoloDev</h1>
      </Link>
      <NavButtons />
    </header>
  );
}
