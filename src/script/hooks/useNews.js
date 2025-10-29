import { useEffect, useState } from "react" 


export function useNews(){

    const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY; 

  useEffect(() => {
    async function getNews() {
      const cached = localStorage.getItem("cachedNews");
      const cacheTime = localStorage.getItem("cacheTime");
      const now = Date.now();

      if (cached && cacheTime && now - Number(cacheTime) < 22 * 60 * 60 * 1000) {
        console.log("Loaded from cache");
        setArticles(JSON.parse(cached));
        return;
      }

      console.log("Fetching from API...");
      const query = "health OR sport OR travel OR europe OR business";
      const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(
        query
      )}&api-key=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.response?.docs) {
          setArticles(data.response.docs);
          localStorage.setItem("cachedNews", JSON.stringify(data.response.docs));
          localStorage.setItem("cacheTime", now);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }

    getNews();
  }, [apiKey]);

  return articles
}