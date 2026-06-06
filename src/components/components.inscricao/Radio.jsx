import "./Radio.css";

const Radio = ({ value, checked, onChange, text }) => {
  return (
    <div className="full-card">
      <div className="check-card">
        <div className="radio-card">
          <input
            type="radio"
            id="radio"
            name="drone"
            className="radio"
            value={value}
            checked={checked}
            onChange={(e) => onChange(e.target.value)}
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
