import React from "react";
import "./Blog.css";
import Article from "../../Components/articles/Article.jsx";
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "./imports.js";
const Blog = () => {
  return (
    <div className="GPT3_Blog section_padding" id="blog">
      <div className="GPT3_Blog-Heading">
        <h1 className="gradient_text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="GPT3_Blog-Container">
        <div className="GPT3_Blog-Container-GroupA">
          <Article ImgURL={Blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
        </div>

        <div className="GPT3_Blog-Container-GroupB">
          <Article ImgURL={Blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article ImgURL={Blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article ImgURL={Blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article ImgURL={Blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
