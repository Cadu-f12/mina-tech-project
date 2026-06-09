/* Componente que cuida da parte lógica do caroussel */

import { useState } from "react";
import { members } from "./data";

import "./TeamCarousel.css";
import TeamPhotoCard from "./TeamPhotoCard/TeamPhotoCard";

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMember = members[currentIndex];

  function nextSlide() {
    setCurrentIndex((prev) =>
      prev === members.length - 1
        ? 0
        : prev + 1
    );
  }

  function prevSlide() {
    setCurrentIndex((prev) =>
      prev === 0
        ? members.length - 1
        : prev - 1
    );
  }

  return (
    <div className="team-carousel">
      {/* CARD */}
      <TeamPhotoCard
        image={currentMember.image}
        name={currentMember.name}
        role={currentMember.role}
      />

      {/* SETA ESQUERDA */}
      <button
        className="carousel-button left"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* SETA DIREITA */}
      <button
        className="carousel-button right"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* INDICADORES */}
      <div className="carousel-indicators">
        {members.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              currentIndex === index
                ? "active"
                : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}