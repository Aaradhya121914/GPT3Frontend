import React from "react";
import "./Features.css";
const Features = ({ title, text }) => {
  return (
    <div className="GPT3_Whatgpt3-Feature-Container_Feature">
      <div className="GPT3_Whatgpt3-Feature-Container_Feature-title">
        <div />
        <h1>{title}</h1>
      </div>

      <div className="GPT3_Whatgpt3-Feature-Container_Feature-text">
        <p>{text}</p>
      </div>

    </div>
  );
};

export default Features;
