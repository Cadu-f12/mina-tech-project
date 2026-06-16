import "./AllEvents.css";

import SchedulePreview from "./SchedulePreview";

export default function AllEvents({ events = [] }) {
    return (
        <>
            <div className="all-events-div">
                <div className="all-events-header">
                    <h1>Programação</h1>
                    <p>Data de todos os eventos</p>
                </div>

                <div className="schedules-div">
                    {events.map((event) => (
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
