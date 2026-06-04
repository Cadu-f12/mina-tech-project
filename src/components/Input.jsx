import "./Input.css";

const Input = ({ text, placeholder, type }) => {
  return (
    <div>
      <h2 className="text">{text}</h2>
      <input className="input" placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
