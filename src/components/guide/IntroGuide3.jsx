import { useNavigate } from "react-router-dom";
import "./IntroGuide.sass"

export default function IntroGuide2() {
    const navigate = useNavigate();

    const handleFinish = () => {
        localStorage.setItem("guideComplited", "true")
        navigate("/login")
    }

    const handleSkip = () => {
        localStorage.setItem("guideComplited", "true")
        navigate("/login")
    }

    return (
        <section className="guide-section">
            <article className="guide-article">
                <img src="assets/imgs/guide-3.png" alt="Guide" className="guide-article_img" />
                <h2 className="guide-article_title">
                    Enhance your News Journey Now!
                </h2>
                <p className="guide-article_text">
                    Be part of our dynamic community and contribute your insights and participate in enriching conversations.
                </p>
            </article>
            <section className="guide-section_nav-bar">
                <div className="guide-section_item"></div>
                <div className="guide-section_item"></div>
                <div className="guide-section_item current"></div>
            </section>
            <div className="guide-section_buttons">
                <button onClick={handleSkip} className="guide-section_button skip">Skip</button>
                <button onClick={handleFinish} className="guide-section_button continue">Continue</button>
            </div>
        </section>
    )

}
