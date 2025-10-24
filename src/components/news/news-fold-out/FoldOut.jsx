import { IoIosArrowBack } from "react-icons/io";
import "./FoldOut.sass"

export default function FouldOut() {
    return (
        <>
        <details className="details-fold">
            <summary className="details-fold_summary">
                <div className="details-fold_summary-div">
                    <img src="../src/assets/logo&icons/newsify_logo.svg" alt="Newsify" className="details-fold_summary-img" />
                    <h2 className="details-fold_summary-h2">Sport</h2>
                </div>
                <IoIosArrowBack className="details-fold_summary-svg" />
            </summary>
            <div className="details-fold_div-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid minima nostrum a possimus eligendi obcaecati ex deserunt modi debitis. Similique itaque possimus ex numquam obcaecati, cum voluptas labore deleniti fugit!</p>
            </div>
        </details>
        </>
    )
}