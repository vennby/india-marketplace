// /api/search.js
export async function smartSearch(queryText) {
    // 1. Convert user's search query into a vector
    const res = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: queryText,
    });
    const [{ embedding }] = res.data;

    // 2. Search Supabase for the most "semantically similar" items
    const { data, error } = await supabase.rpc('match_listings', {
        query_embedding: embedding,
        match_threshold: 0.5, // 0 to 1 (1 is exact match)
        match_count: 10,      // Number of results to show
    });

    return data;
}