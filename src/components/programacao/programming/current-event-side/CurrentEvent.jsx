import "./CurrentEvent.css";

import temaPhoto from "../../../../assets/icone-tema.png";
import alimentacaoPhoto from "../../../../assets/icone-alimentacao.png";
import localPhoto from "../../../../assets/icone-local.png";
import horarioPhoto from "../../../../assets/icone-horario.png";

import EventProperties from "./EventProperties";

export default function CurrentEvent({ image, currentDay, date, properties }) {
    return (
        <>
            <div className="current-event-div">
                <div className="current-event-image">
                    <img src={image} alt="Foto do evento" />
                </div>

                <div className="current-event-content">
                    <div className="current-event-date">
                        <h2>{currentDay}</h2>
                        <p>{date}</p>
                    </div>

                    <div className="current-event-properties">
                        <EventProperties
                            icon={temaPhoto}
                            title="Tema"
                            text={properties.tema}
                        />
                        <EventProperties
                            icon={alimentacaoPhoto}
                            title="Alimentação"
                            text={properties.alimentacao}
                        />
                        <EventProperties
                            icon={localPhoto}
                            title="Local"
                            text={properties.local}
                        />
                        <EventProperties
                            icon={horarioPhoto}
                            title="Horário"
                            text={properties.horario}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
