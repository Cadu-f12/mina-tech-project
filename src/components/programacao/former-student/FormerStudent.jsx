import "./FormerStudent.css"

export default function FormerStudent({ image, title, text, reverse }) {
    return (
        <>
            <div className={`former-student-card ${reverse ? "reverse" : ""}`}>
                <div className="former-student-image">
                    <img src={image} alt="Former Student"/>
                </div>

                <div className="former-student-content">
                    <h2>{title}</h2>

                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}