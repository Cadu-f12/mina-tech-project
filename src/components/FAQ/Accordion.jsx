import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ Title, imgOpen, imgClose, content }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  return (
    <div className="accordion">
      <button
        className={openAccordion ? "button-accordion-open" : "button-accordion"}
        onClick={() => setOpenAccordion((previousValue) => !previousValue)}
      >
        {openAccordion ? (
          <>
            <div className="card-accordion-open">
              <div className="card-content-accordion">
                <div className="title-accordion">
                  <h1 className="content-accordion">{Title}</h1>
                </div>
              </div>
              <div>
                <img src={imgOpen} alt="button" className="img-accordion" />
              </div>
            </div>
            <div className="card-accordion-content">
              <div>
                <h1 className="content-accordion">{content}</h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="card-accordion">
              <div className="card-content-accordion">
                <div className="title-accordion">
                  <h1 className="content-accordion">{Title}</h1>
                </div>
              </div>
              <div>
                <img src={imgClose} alt="button" className="img-accordion" />
              </div>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default Accordion;
