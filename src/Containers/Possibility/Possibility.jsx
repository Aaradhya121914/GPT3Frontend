import React from "react";
import "./Possibility.css";
import possibilityImg from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="GPT3_Possibility section_padding" id="possibility">
      <div className="GPT3_Possibility-Image">
        <img src={possibilityImg} alt="Possibility" />
      </div>
      <div className="GPT3_Possibility-Content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
