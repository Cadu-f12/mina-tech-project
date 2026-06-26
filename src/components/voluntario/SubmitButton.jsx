import "./SubmitButton.css";

const SubmitButton = ({ onClick }) => {
  return (
    <div className="card-button">
      <button
        className="submit-button"
        title="Inscreva- se já"
        onClick={onClick}
      >
        Inscreva-se já
      </button>
    </div>
  );
};

export default SubmitButton;
