import "./Select.css";

const Select = ({ text, data, value, onChange }) => {
  return (
    <div>
      <h2 className="text">{text}</h2>
      <select
        name="select"
        id="select"
        className="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {data.map((element) => (
          <option value={element} key={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
