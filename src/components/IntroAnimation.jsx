import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroAnimation.sass"

export default function IntroAnimation() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/guide");
        }, 4000); 

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section className="logo-animation">
            <img src="../src/assets/logo&icons/newsify_logo.svg" alt="Newsify" className="logo-animation_logo" />
            <h1 className="logo-animation_title">Newsify</h1>
        </section>
    )
}