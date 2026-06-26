import "./SuccessModal.css";

const SuccessModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        <div className="modal-icon-wrapper">
          <svg
            className="modal-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="url(#grad-success)" />
            <path
              d="M7 12.5L10.5 16L17 9"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="grad-success" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff004d" />
                <stop offset="100%" stopColor="#dd6e7c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="modal-title">Candidatura enviada!</h2>

        <p className="modal-text">
          Recebemos o seu perfil e nossa equipe irá analisá-lo com atenção.
        </p>

        <div className="modal-highlight">
          <span className="modal-highlight-icon">📬</span>
          <p className="modal-highlight-text">
            Caso seja <strong>aprovado(a)</strong>, você receberá um{" "}
            <strong>e-mail</strong> com o agendamento da entrevista.
          </p>
        </div>

        <p className="modal-subtext">
          Fique de olho na sua caixa de entrada — e no spam, só por garantia.
        </p>

        <button className="modal-button" onClick={onClose}>
          Entendido
        </button>

      </div>
    </div>
  );
};

export default SuccessModal;
