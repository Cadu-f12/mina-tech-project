import "./Title.css";

const Title = ({ title }) => {
  return (
    <>
      <div className="card-title">
        <h2 className="title">{title}</h2>
      </div>
    </>
  );
};

export default Title;
