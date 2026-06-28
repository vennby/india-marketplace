"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CreateListing from "@/components/CreateListing";
import AadhaarLogin from "../components/AadharLogin";

export default function Home() {
  const router = useRouter();
  const [listingSubmitted, setListingSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {!listingSubmitted ? (
        // 1. User creates the listing first
        <CreateListing onListingComplete={() => setListingSubmitted(true)} />
      ) : (
        // 2. Aadhaar verification triggers second
        <AadhaarLogin onVerified={() => router.push("/dashboard")} />
      )}
    </div>
  );
}
