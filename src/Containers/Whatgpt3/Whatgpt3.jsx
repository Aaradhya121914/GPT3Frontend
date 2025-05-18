import React from "react";
import "./Whatgpt3.css";
import Features from "../../Components/features/Features";
const Whatgpt3 = () => {
  return (
    <div className="GPT3_Whatgpt3 section_margin" id="wgpt3">
      <div className="GPT3_Whatgpt3-Feature">
        <Features
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>

      <div className="GPT3_Whatgpt3-Heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>

      <div className="GPT3_Whatgpt3-Container">
        <Features
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Features
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Features
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default Whatgpt3;
