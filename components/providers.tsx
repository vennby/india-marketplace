// app/providers.tsx
"use client"; // This is the magic line that fixes the error!

import { AnonAadhaarProvider } from "@anon-aadhaar/react";

export function AnonAadhaarClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnonAadhaarProvider>{children}</AnonAadhaarProvider>;
}
