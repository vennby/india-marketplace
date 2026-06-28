// components/AadhaarLogin.tsx
"use client";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import { useEffect } from "react";

export default function AadhaarLogin() {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    if (anonAadhaar.status === "logged-in") {
      console.log("User verified successfully!");
      // Here you can unlock the "Post Listing" button
    }
  }, [anonAadhaar]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg border-2 border-dashed border-blue-200">
      <h3 className="text-lg font-semibold mb-2">Verify your Identity</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Only verified Indian residents can sell on this platform. Your Aadhaar
        number is <b>not</b> shared with us.
      </p>

      {/* nullifierSeed: A random number you generate to prevent 
        scammers from using the same proof twice. 
      */}
      <LogInWithAnonAadhaar nullifierSeed={42069} />

      <p className="mt-2 text-xs font-mono">
        Status:{" "}
        <span
          className={
            anonAadhaar.status === "logged-in"
              ? "text-green-600"
              : "text-red-500"
          }
        >
          {anonAadhaar.status.toUpperCase()}
        </span>
      </p>
    </div>
  );
}
