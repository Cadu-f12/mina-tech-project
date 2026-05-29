/* Componente que cuida da parte visual do caroussel */

import "./TeamPhotoCard.css";

type TeamPhotoCardProps = {
  image: string;
  name: string;
  role: string;
};

export default function TeamPhotoCard({ image, name, role, }: TeamPhotoCardProps) {
  return (
    <div className="team-photo-card">
      <img src={image} alt={name} className="team-photo-image" />

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