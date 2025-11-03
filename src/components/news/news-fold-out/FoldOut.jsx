import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./FoldOut.sass"

export default function FouldOut({ title, articles = [] }) {

    const [activeId, setActiveId] = useState(null)
    const [startX, setStartX] = useState(0)

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e, id) => {
        const currentX = e.touches[0].clientX
        const diffx = startX - currentX

        if (diffx > 50) setActiveId(id)

        if (diffx < -50) setActiveId(null)
    }

    const handleToggle = e => {
        const element = e.target
        const openHeight = element.scrollHeight + "px"
        element.style.height = element.open ? openHeight : null
    }

    const handleSave = (article) => {
        try {
            const saved = localStorage.getItem("selectedArticles")
            let articlesAchive = []

            if (saved) {
                const parsed = JSON.parse(saved)
                articlesAchive = Array.isArray(parsed) ? parsed : []
            }

            const articleId = article._id || article.uri || article.web_url || article.url

            const exists = articlesAchive.some((aa) => {
                const aaId = aa._id || aa.uri || aa.web_url || aa.url
                return aaId === articleId
            })

            if (!exists) {
                articlesAchive.push(article)
                localStorage.setItem("selectedArticles", JSON.stringify(articlesAchive))
                console.log("✅ Article saved:", article)
            } else {
                console.log("⚠️ Article already exists:", article)
            }
        } catch (err) {
            console.error("❌ Error saving article to localStorage:", err)
        }
    }




    return (
        <>
    <details onToggle={handleToggle} className="details-fold" data-title={title.toLowerCase()} style={{display: JSON.parse(localStorage.getItem("switchStates") || '{}')[title.toLowerCase()] === false || articles.length === 0 ? "none" : "block"}}>
                <summary className="details-fold_summary">
                    <div className="details-fold_summary-div">
                        <img src="assets/logo&icons/newsify_logo.svg" alt="Newsify" className="details-fold_summary-img" />
                        <h2 className="details-fold_summary-h2">{title}</h2>
                    </div>
                    <IoIosArrowBack className="details-fold_summary-svg" />
                </summary>
                <div className="details-fold_div-content">
                    {articles.length === 0 ? (
                        <p>No articles available for this category.</p>
                    ) : (
                        <ul className="details-fold_list">
                            {articles.slice(0, 5).map((article) => {
                                const imageUrl = article.multimedia?.default.url
                                    ? article.multimedia.default.url
                                    : "https://placehold.co/300x300?text=No+Image"

                                const swiped = activeId === (article._id || article.url)

                                return (
                                    <li key={article._id || article.uri} className={`details-fold_item ${swiped ? "swiped" : ""}`} onTouchStart={handleTouchStart} onTouchMove={(e) => handleTouchMove(e, article._id || article.url)}>
                                        <div className="details-fold_card">
                                            <div className="details-fold_div-img">
                                                <img src={imageUrl} alt={article.headline?.main} className="details-fold_img" />
                                            </div>
                                            <div className="details-fold_text">
                                                <h3 className="details-fold_title">{article.keywords[0].value}</h3>
                                                <p className="details-fold_p">{article.headline?.main}</p>
                                            </div>
                                            <div className="details-fold_div-slide">
                                                <Link onClick={() => handleSave(article)} to="/achive" className="details-fold_slide-link" >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </details>
        </>
    )
}