import "./Input.css";

const Input = ({ text, placeholder, type, value, onChange }) => {
  return (
    <div>
      <h2 className="text">{text}</h2>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
