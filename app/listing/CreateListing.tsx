"use client";

// components/CreateListing.tsx
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreateListing() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      price: formData.get("price"),
      metadata: {
        condition: formData.get("condition"),
        negotiable: true,
      },
    };

    const { error } = await supabase.from("listings").insert([data]);
    if (!error) alert("Listing sent for AI verification!");
    setLoading(false);
  }

  return (
    <>
      <div className="rounded-lg shadow-md bg-white p-4">
        <form
          onSubmit={handleSubmit}
          className="p-4 space-y-4 max-w-md mx-auto"
        >
          <h2 className="text-xl font-bold">What are you listing?</h2>
          <select name="category" className="w-full p-2 border">
            <option value="goods">Goods (Mobile, Bike, etc)</option>
            <option value="real_estate">Real Estate (Rent/Sell)</option>
            <option value="services">Services (Plumbing, Tuition)</option>
          </select>
          <h2 className="text-xl font-bold">What are you listing?</h2>
          <input
            name="title"
            placeholder="What are you selling?"
            className="w-full p-2 border"
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price in ₹"
            className="w-full p-2 border"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white p-2 w-full"
          >
            {loading ? "Checking for Scams..." : "Post Listing"}
          </button>
        </form>
      </div>
    </>
  );
}
