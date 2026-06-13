import "./Layout.css";

import TeamSection from "../TeamCard/TeamSection/TeamSection";
import BannerSection from "../BannersSection/BannerSection";
import PartnershipsSection from "../Partnerships/PartnershipsSection";

export default function OSCS() {
  return (
    <div className="layout-body">
      <div className="layout-container">
        <TeamSection />
        <BannerSection />
        <PartnershipsSection />
      </div>
    </div>
  );
}
