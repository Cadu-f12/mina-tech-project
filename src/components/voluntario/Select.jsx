import "./Select.css";

const Select = ({ text, data, value, onChange, error }) => {
  return (
    <div>
      {text && <h2 className="text">{text}</h2>}
      <select
        name="select"
        id="select"
        className={`select ${error ? "select--error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {data.map((element) => (
          <option value={element} key={element}>
            {element}
          </option>
        ))}
      </select>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Select;
