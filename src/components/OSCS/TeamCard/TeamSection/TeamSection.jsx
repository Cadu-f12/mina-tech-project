import "./TeamSection.css";

import TeamCarousel from "./TeamCarousel/TeamCarousel";
import TeamDescription from "./TeamDescription/TeamDescription";

export default function TeamSection() {
  return (
    <section className="team-section">

      {/* FOTO */}
      <div className="team-left">
        <TeamCarousel />
      </div>

      {/* TEXTO */}
      <div className="team-right">
        <TeamDescription />
      </div>

    </section>
  );
}