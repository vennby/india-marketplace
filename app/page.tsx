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
      <CreateListing />
    </div>
  );
}
