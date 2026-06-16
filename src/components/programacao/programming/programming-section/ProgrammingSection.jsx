import "./ProgrammingSection.css";

import AllEvents from "../all-events-side/AllEvents";
import CurrentEvent from "../current-event-side/CurrentEvent";

import { currentEventData, allEventsData } from "../data-programming";

export default function ProgrammingSection() {
    return (
        <>
            <section className="programming-section">
                <div className="programming-section-content">
                    <AllEvents
                        events={allEventsData}
                    />
                    <CurrentEvent
                        image={currentEventData.image}
                        currentDay={currentEventData.currentDay}
                        date={currentEventData.date}
                        properties={currentEventData.properties}
                    />
                </div>
            </section>
        </>
    );
}
