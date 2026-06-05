import "./OSCS.css";

import TeamSection from '../components/OSCS/TeamCard/TeamSection/TeamSection';
import BannerSection from '../components/OSCS/BannersSection/BannerSection'
import PartnershipsSection from "../components/OSCS/Partnerships/PartnershipsSection";

export default function OSCS() {
    return (
        <div className="oscs-body">
            <main className="oscs-container">
                <TeamSection />
                <BannerSection />
                <PartnershipsSection />
            </main>
        </div>
    );
}
