"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full max-w-md">
        <SignIn signUpUrl="/sign-up" afterSignInUrl="/" afterSignUpUrl="/" />
      </div>
    </div>
  );
}
