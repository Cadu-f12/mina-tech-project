import "./AllEvents.css";

import SchedulePreview from "./SchedulePreview";
import { allEventsData } from "../data-programming";

export default function AllEvents() {
    return (
        <>
            <div className="all-events-div">
                <div className="all-events-header">
                    <h1>Programação</h1>
                    <p>Data de todos os eventos</p>
                </div>

                <div className="schedules-div">
                    {allEventsData.map((event) => (
                        <SchedulePreview
                            key={event.id}
                            date={event.date}
                            description={event.description}
                            image={event.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
