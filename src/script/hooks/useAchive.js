import { useEffect, useState } from "react"

export function useAchive() {
    const [grouped, setGrouped] = useState({
        sport: [],
        health: [],
        travel: [],
        europe: [],
        business: [],
    })

    useEffect(() => {
        try {
            const saved = localStorage.getItem("selectedArticles")
            const articles = saved ? JSON.parse(saved) : []

            if (!Array.isArray(articles)) return

            const matchCategory = (article, keyword) => {
                const section = article.section_name?.toLowerCase() || ""
                const subsection = article.subsection_name?.toLowerCase() || ""
                const words = Array.isArray(keyword) ? keyword : [keyword]

                return words.some((word) => {
                    const hasSubSection = subsection.includes(word)
                    const hasSection = section.includes(word)
                    const hasKeyword =
                        article.keywords?.some(
                            (k) =>
                                (k.name.toLowerCase() === "subject" ||
                                    k.name.toLowerCase() === "location") &&
                                k.value.toLowerCase().includes(word.toLowerCase())
                        ) || false

                    return hasSection || hasKeyword || hasSubSection
                })
            }

            const groupedArticles = {
                sport: articles.filter((a) => matchCategory(a, "sport")),
                health: articles.filter((a) => matchCategory(a, ["health", "sugar"])),
                travel: articles.filter((a) => matchCategory(a, "travel")),
                europe: articles.filter((a) => matchCategory(a, "europe")),
                business: articles.filter((a) => matchCategory(a, ["business", "economy", "market", "finance", "briefing"])),
            }

            setGrouped(groupedArticles)
        } catch (err) {
            console.error("Error loading archive from localStorage:", err)
        }
    }, [])

    return grouped
}
