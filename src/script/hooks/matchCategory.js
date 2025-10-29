 import { useNews } from "../../script/hooks/useNews.js"
 
 export function matchCategory(){

    const articles = useNews() || [];

    const matchCategory = (article, keyword) => {
        const section = article.section_name?.toLowerCase() || ""
        const words = Array.isArray(keyword) ? keyword : [keyword]


        const subsection = article.subsection_name?.toLowerCase() || ""

        return words.some((word) => {
            const hasSubSection = subsection.includes(word)
            const hasSection = section.includes(word)
            const hasKeyword = article.keywords?.some(
                (k) =>
                    (k.name.toLowerCase() === "subject" || k.name.toLowerCase() === "location") &&
                    k.value.toLowerCase().includes(word.toLowerCase())

            ) || false

            return hasSection || hasKeyword || hasSubSection

        })
    }

    const grouped = {
        sport: articles.filter((a) => matchCategory(a, "sport")),
        health: articles.filter((a) => matchCategory(a, ["health", "sugar"])),
        travel: articles.filter((a) => matchCategory(a, "travel")),
        europe: articles.filter((a) => matchCategory(a, "europe")),
        business: articles.filter((a) => matchCategory(a, ["business", "economy", "market", "finance", "briefing"])),

    }

    return grouped
 }