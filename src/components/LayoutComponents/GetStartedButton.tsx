import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default async function GetStartedButton() {
  const { userId } = await auth();

  return userId ? (
    <Link href="/search" className="custom-button">
      Get Started
    </Link>
  ) : (
    <SignInButton mode="modal">
      <button type="button" className="custom-button">
        Get Started
      </button>
    </SignInButton>
  );
}
