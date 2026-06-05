/* Cuida do texto ao lado da imagem */

import "./TeamDescription.css";

export default function TeamDescription() {
  return (
    <div className="team-description-container">
      <h2 className="team-title">
        Conheça a equipe
      </h2>

      <p className="team-text">
        Somos uma equipe formada por 11
        mulheres dedicadas a abrir
        caminhos para outras mulheres nos
        setores de tecnologia e engenharia.

        Nosso foco é acolher aquelas em
        situação de vulnerabilidade,
        oferecendo suporte, capacitação e
        as oportunidades necessárias para
        que ocupem seus espaços de direito
        e cresçam com excelência no
        mercado de trabalho.
      </p>
    </div>
  );
}