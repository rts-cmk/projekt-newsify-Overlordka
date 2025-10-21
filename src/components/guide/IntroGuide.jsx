import { useNavigate } from "react-router-dom";
import "./IntroGuide.sass"

export default function IntroGuide() {
    const navigate = useNavigate();

    return (
        <section className="guide-section">
            <article className="guide-article">
                <img src="../src/assets/imgs/guide-1.png" alt="Guide" className="guide-article_img" />
                <h2 className="guide-article_title">
                    Stay Connected, Everywhere, Anytime
                </h2>
                <p className="guide-article_text">
                    Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.
                </p>
            </article>
            <section className="guide-section_nav-bar">
                <div className="guide-section_item current"></div>
                <div className="guide-section_item"></div>
                <div className="guide-section_item"></div>
            </section>
            <div className="guide-section_buttons">
                <button onClick={() => navigate("/login")} className="guide-section_button skip">Skip</button>
                <button onClick={() => navigate("/guide2")} className="guide-section_button continue">Continue</button>
            </div>
        </section>
    )

}
