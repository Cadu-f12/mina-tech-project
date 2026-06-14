import "./CardForm.css";

const CardForm = ({ imgPath, timelineTitle, text, children1, children2 }) => {
  return (
    <div className="page">
      <div className="timeline">
        <div className="timeline-node">
          <img src={imgPath} alt="" className="logo" />
          <div className="vertical-line"></div>
        </div>

        <h2 className="timeline-title">{timelineTitle}</h2>
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
