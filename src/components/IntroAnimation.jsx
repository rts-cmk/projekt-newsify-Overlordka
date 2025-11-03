import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroAnimation.sass"

export default function IntroAnimation() {
    const navigate = useNavigate();

    useEffect(() => {

        const imagesToPreload = [
            "../public/assets/imgs/guide-1.png",
            "../public/assets/imgs/guide-2.png",
            "../public/assets/imgs/guide-3.png"
        ]

        imagesToPreload.forEach((src) => {
            const img = new Image()
            img.src = src
        })


        const guideComplited = localStorage.getItem("guideComplited") === "true"

        const timer = setTimeout(() => {
            if (guideComplited) {
                navigate("/login")
            } else {
                navigate("/guide")
            }

        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section className="logo-animation">
            <img src="../public/assets/logo&icons/newsify_logo.svg" alt="Newsify" className="logo-animation_logo" />
            <h1 className="logo-animation_title">Newsify</h1>
        </section>
    )
}