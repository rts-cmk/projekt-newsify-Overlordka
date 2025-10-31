
export function searchNews(articles = [], query = "") {
  if (!query.trim()) return articles;

  const lowerQuery = query.toLowerCase();

  return articles.filter((article) => {
    const title = article.title || article.headline?.main || article.keywords[0].value || "";

    return title.toLowerCase().includes(lowerQuery);
  });
}
