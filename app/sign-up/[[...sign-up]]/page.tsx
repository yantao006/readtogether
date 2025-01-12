"use client";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full max-w-md">
        <SignUp signInUrl="/sign-in" afterSignInUrl="/" afterSignUpUrl="/" />
      </div>
    </div>
  );
}
