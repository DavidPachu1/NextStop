/**
 * Web search via Tavily API.
 * Falls back gracefully when TAVILY_API_KEY is not set.
 */
export async function webSearch(query) {
  if (!process.env.TAVILY_API_KEY) {
    console.warn('[webSearch] TAVILY_API_KEY not set — skipping real-time search');
    return { results: [], note: 'Búsqueda web no configurada. Añade TAVILY_API_KEY al .env' };
  }

  try {
    const response = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.TAVILY_API_KEY,
        query,
        max_results: 6,
        search_depth: 'basic',
        include_answer: true,
        include_raw_content: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('[webSearch] Tavily error:', error);
      return { results: [], error: 'Búsqueda fallida' };
    }

    const data = await response.json();
    return {
      answer: data.answer || null,
      results: (data.results || []).map((r) => ({
        title: r.title,
        url: r.url,
        content: r.content?.slice(0, 800),
        score: r.score,
      })),
    };
  } catch (err) {
    console.error('[webSearch] Network error:', err.message);
    return { results: [], error: err.message };
  }
}
