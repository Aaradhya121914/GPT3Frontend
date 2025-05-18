import React from 'react'
import "./Article.css"
const Article = ({ImgURL,date,text}) => {
  return (
    <div className='GPT3_Blog-Container_Article '>
      <div className="GPT3_Blog-Container_Article-Image">
        <img src={ImgURL} alt="Blog Image" />
      </div>
      <div className="GPT3_Blog-Container_Article-Content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
