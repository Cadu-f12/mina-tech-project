import "./Input.css";

const Input = ({ text, placeholder, type, min, value, onChange, error }) => {
  return (
    <div>
      <h2 className="text">{text}</h2>
      <input
        className={`input ${error ? "input--error" : ""}`}
        placeholder={placeholder}
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Input;
