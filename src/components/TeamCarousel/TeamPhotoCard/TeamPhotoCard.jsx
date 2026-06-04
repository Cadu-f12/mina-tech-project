/* Componente que cuida da parte visual do carrossel */

import "./TeamPhotoCard.css";

export default function TeamPhotoCard({ image, name, role }) {
  return (
    <div className="team-photo-card">
      <img
        src={image}
        alt={name}
        className="team-photo-image"
      />

      <div className="team-photo-info">
        <div className="team-name">
          {name}
        </div>

        <div className="team-role">
          {role}
        </div>
      </div>
    </div>
  );
}