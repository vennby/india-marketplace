import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function SearchResults() {
  const { data: listings, error } = await supabase.from("listings").select("*");

  if (error) {
    console.error("Error fetching listings:", error);
    return <div>Error fetching listings</div>;
  }

  return (
    <>
      <div className="bg-blue-400 border-rounded-lg p-4 shadow-md w-100 h-50">
        <h1>Search Results!</h1>
        {listings && listings.length > 0 ? (
          <ul>
            {listings.map((listing) => (
              <li key={listing.id}>{listing.title}</li>
            ))}
          </ul>
        ) : (
          <p>No entries found.</p>
        )}
      </div>
    </>
  );
}
