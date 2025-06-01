"use client";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

export default function NavButtons(): JSX.Element {
  const pathname = usePathname();
  const isSearchPage = pathname.startsWith("/search");
  return (
    <nav className="flex gap-6 items-center montserrat font-bold pr-6">
      <SignedIn>
        {!isSearchPage && <Link href="/search">Explore</Link>}
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button type="button" className="cursor-pointer">
            Login
          </button>
        </SignInButton>
      </SignedOut>
    </nav>
  );
}
