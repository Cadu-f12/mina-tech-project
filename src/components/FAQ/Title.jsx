import "./Title.css";

const Title = ({ title }) => {
  return (
    <>
      <div className="faq-title-card">
        <h2 className="faq-title">{title}</h2>
      </div>
    </>
  );
};

export default Title;
