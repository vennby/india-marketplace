import Link from "next/link";
import ListingCard from "./components/ListingCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="mx-4 mt-4 rounded-3xl bg-gradient-to-r from-gray-100 to-white p-8 shadow-sm border border-gray-200">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          India Marketplace
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          List anything and everything on India's most open marketplace.
        </p>
      </div>

      <div className="mx-4 mt-5 rounded-3xl bg-gradient-to-br from-green-700 to-green-800 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>

        <p className="mt-2 text-green-100">
          Check out our latest and greatest products.
        </p>

        <div className="mt-8 flex flex-wrap gap-6">
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
      </div>

      <div className="mx-4 my-5 rounded-3xl bg-gradient-to-r from-indigo-900 to-indigo-800 p-10 text-center text-white shadow-lg">
        <h2 className="text-3xl font-bold tracking-tight">
          Want to post to India Marketplace?
        </h2>

        <p className="mt-3 text-indigo-100">
          Click the button below to create a new listing.
        </p>

        <Link
          href="/listing"
          className="mt-6 inline-block rounded-2xl bg-white px-8 py-3 text-base font-semibold text-indigo-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl"
        >
          List your Product!
        </Link>
      </div>
    </main>
  );
}
