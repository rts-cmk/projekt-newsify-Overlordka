import { IoIosArrowBack } from "react-icons/io";
import "./FoldOut.sass"

export default function FouldOut({ title, articles = [] }) {

    const handleToggle = e => {
        const element = e.target
        const openHeight = element.scrollHeight + "px"
        element.style.height = element.open ? openHeight : null
    }


    return (
        <>
            <details onToggle={handleToggle} className="details-fold">
                <summary className="details-fold_summary">
                    <div className="details-fold_summary-div">
                        <img src="../src/assets/logo&icons/newsify_logo.svg" alt="Newsify" className="details-fold_summary-img" />
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

                                return (
                                    <li key={article._id || article.uri} className="details-fold_item">
                                        <div className="details-fold_card">
                                            <div className="details-fold_div-img">
                                            <img src={imageUrl} alt={article.headline?.main} className="details-fold_img" />
                                            </div>
                                            <div className="details-fold_text">
                                                <h3 className="details-fold_title">{article.headline?.main}</h3>
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