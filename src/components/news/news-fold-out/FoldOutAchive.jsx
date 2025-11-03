import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./FoldOut.sass"

export default function FoldOutAchive({ title, articles = [] }) {

    const [archivedArticles, setArchivedArticles] = useState([])

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

   const handleDelete = (article) => {
    try {
        const saved = localStorage.getItem("selectedArticles")
        if (!saved) return

        const articlesAchive = JSON.parse(saved)

        const updated = articlesAchive.filter(
            (a) => a._id !== article._id && a.web_url !== article.web_url
        )

        localStorage.setItem("selectedArticles", JSON.stringify(updated))


        setArchivedArticles(updated)

        window.location.reload()
    } catch (err) {
        console.error("❌ Error deleting article:", err)
    }
}




    return (
        <>
            <details onToggle={handleToggle} className="details-fold" data-title={title.toLowerCase()} style={{ display: articles.length === 0 ? "none" : "block" }}>
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
                                            <div className="details-fold_div-slide-del">
                                                <Link onClick={() => handleDelete(article)} to="/achive" className="details-fold_slide-link" >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3 6H21M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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