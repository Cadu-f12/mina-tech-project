import "./CardForm.css";
const CardForm = ({ text, children1, children2 }) => {
  return (
    <div className="page">
      <div className="timeline">
        <div>
          <img src="" alt="" />
        </div>
        <div className="line"></div>
      </div>
      <div className="card">
        <div className="section-title">
          <h2>{text}</h2>
          <div className="line"></div>
        </div>
        <div className="children1">{children1}</div>
        <div className="children2">{children2}</div>
      </div>
    </div>
  );
};

export default CardForm;
