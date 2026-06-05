import "./OSCS.css";

import TeamSection from '../components/OSCS/TeamCard/TeamSection/TeamSection';
import BannerSection from '../components/OSCS/BannersSection/BannerSection'

export default function OSCS() {
    return (
        <>
            <div className="oscs-body">
                <TeamSection />
                <BannerSection />
            </div>
        </>
    );
}
