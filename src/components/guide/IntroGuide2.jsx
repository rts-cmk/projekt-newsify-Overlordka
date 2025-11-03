import { useNavigate } from "react-router-dom";
import "./IntroGuide.sass"

export default function IntroGuide2() {
    const navigate = useNavigate();

    const handleSkip = () => {
        localStorage.setItem("guideComplited", "true")
        navigate("/login")
    }

    return (
        <section className="guide-section">
            <article className="guide-article">
                <img src="assets/imgs/guide-2.png" alt="Guide" className="guide-article_img" />
                <h2 className="guide-article_title">
                    Become a Savvy Global Citizen.
                </h2>
                <p className="guide-article_text">
                    Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!
                </p>
            </article>
            <section className="guide-section_nav-bar">
                <div className="guide-section_item"></div>
                <div className="guide-section_item current"></div>
                <div className="guide-section_item"></div>
            </section>
            <div className="guide-section_buttons">
                <button onClick={handleSkip} className="guide-section_button skip">Skip</button>
                <button onClick={() => navigate("/guide3")} className="guide-section_button continue">Continue</button>
            </div>
        </section>
    )

}
