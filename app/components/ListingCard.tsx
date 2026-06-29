import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function ListingCard({
  title,
  price,
}: {
  title: string;
  price: number;
}) {
  const { data: listings, error } = await supabase.from("listings").select("*");

  return (
    <div className="border rounded-lg p-4 shadow-md w-100 h-50 bg-white text-green-700">
      <h2>{title}</h2>
      <p>price: {price}</p>
    </div>
  );
}
