import "./Button.css";
import { useState } from "react";

const Button = ({ text, title }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <h2 className="text">{text}</h2>
      <div className="button-container">
        <button
          className={`button ${selected ? "selected" : ""}`}
          onClick={() => setSelected(!selected)}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
export default Button;
