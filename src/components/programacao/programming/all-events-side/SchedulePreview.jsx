import "./SchedulePreview.css";

export default function SchedulePreview({ date, description, image }) {
    return (
        <>
            <div className="schedule-preview-div">
                <div className="schedule-preview-content">
                    <h3>{date}</h3>
                    <p>{description}</p>
                </div>

                <div className="schedule-preview-image">
                    <img src={image} alt="Imagem de demonstração" />
                </div>
            </div>
        </>
    );
}
