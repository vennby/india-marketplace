import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <div className="p-4 m-3 bg-red-400 borded rounded-lg h-screen">
      <h1 className="text-2xl font-bold mb-4">Search Page</h1>
      <SearchResults />
    </div>
  );
}
