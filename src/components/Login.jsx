import { Link, useNavigate } from "react-router-dom"
import "./Login.sass"

export default function Login() {
    const navigate = useNavigate();

    return (
        <section className="login-section">
            <article className="login-section_art-logo">
                <img src="../public/assets/logo&icons/newsify_logo.svg" alt="Newsify" className="login-section_logo" />
                <h2 className="login-section_title">Newsify</h2>
                <p className="login-section_w-text">Welcome! Let’s dive into your account!</p>
            </article>
            <section className="login-section_buttons">
                <button onClick={() => navigate("/home")} className="login-section_btn-continue">Continue with Facebook</button>
                <button onClick={() => navigate("/home")} className="login-section_btn-continue">Continue with Google</button>
            </section>
            <div className="login-section_or-div">
                <hr className="login-section_hr" />
                <span className="login-section_or-text">or</span>
                <hr className="login-section_hr" />
            </div>
            <section className="login-section_sign-sec">
                <button onClick={() => navigate("/home")} className="login-section_btn-password">Sign in with password</button>
                <div className="login-section_div-signup">
                    <p className="login-section_signup-p">Don’t have an account?</p>
                    <Link to="/home" className="login-section_signup-link">Sign up</Link>
                </div>
            </section>
        </section>
    )

}