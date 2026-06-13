import "./EventProperties.css";

export default function EventProperties({ icon, title, text }) {
    return (
        <>
            <div className="event-property">
                <div className="icon-property">
                    <img src={icon} alt="Ícone da propriedade" />
                </div>

                <div className="content-property">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}
