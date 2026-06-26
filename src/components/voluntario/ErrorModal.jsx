import "./ErrorModal.css";

const ErrorModal = ({ fields, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card error-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon-wrapper">
          <svg
            className="modal-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="url(#grad-error)" />
            <path
              d="M12 7v5"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="16.5" r="1.2" fill="white" />
            <defs>
              <linearGradient id="grad-error" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ff004d" />
                <stop offset="100%" stopColor="#dd6e7c" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h2 className="modal-title error-modal-title">Campos obrigatórios</h2>

        <p className="modal-text">
          Alguns campos precisam ser preenchidos antes de continuar:
        </p>

        <ul className="error-field-list">
          {fields.map((field) => (
            <li key={field} className="error-field-item">
              {field}
            </li>
          ))}
        </ul>

        <button className="modal-button" onClick={onClose}>
          Corrigir
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
