import "./Banner.css";

export default function Banner({ image, text, reverse = false }) {
    return (
        <div className={`banner-container ${reverse ? "reverse" : ""}`}>
            <img src={image} alt="banner-image" />

            <p className="banner-text">
                {text}
            </p>
        </div>
    );
}