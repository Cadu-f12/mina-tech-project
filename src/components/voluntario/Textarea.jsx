import "./Textarea.css";

const Textarea = ({ text, placeholder, value, onChange, error, hint, rows = 5 }) => {
  return (
    <div className="textarea-wrapper">
      <h2 className="text">{text}</h2>
      {hint && <p className="textarea-hint">{hint}</p>}
      <textarea
        className={`textarea ${error ? "textarea--error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
      />
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Textarea;
