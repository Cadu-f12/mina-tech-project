import "./PastScheduleSection.css";

import PastSchedule from "./PastSchedule";
import { pastScheduleBanners } from "./data-past";

export default function PastScheduleSection() {
    return (
        <>
            <section className="past-schedule-section">
                <h2>Programações Passadas</h2>

                {pastScheduleBanners.map((banner) => (
                    <PastSchedule
                        key={banner.id}
                        image={banner.image}
                        text={banner.text}
                        reverse={banner.reverse}
                    />
                ))}
                
            </section>
        </>
    );
}
