import "./PastSchedule.css"

export default function PastSchedule({ image, text, reverse }) {
    return (
        <>
            <div className={`past-schedule ${reverse ? "reverse" : ""}`}>
                <div className="past-schedule-image">
                    <img src={image} alt="" />
                </div>

                <div className="past-schedule-content">
                    <p>{text}</p>

                    <button>
                        Veja mais
                    </button>
                </div>
            </div>
        </>
    );
}