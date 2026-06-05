import "./radio.css";

const Radio = ({ text }) => {
  return (
    <div className="full-card">
      <div className="check-card">
        <div className="radio-card">
          <input
            type="radio"
            id="radio"
            name="drone"
            value="radio"
            className="radio"
          />
        </div>
        <div className="label">
          <label for="radio">{text}</label>
        </div>
      </div>
    </div>
  );
};

export default Radio;
