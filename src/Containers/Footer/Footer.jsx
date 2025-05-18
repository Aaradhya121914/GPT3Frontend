import React from 'react'
import "./Footer.css"
import gpt3logo from "../../assets/logo.svg"

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return (
    <div className='GPT3_Footer section_padding'>
     <div className="GPT3_Footer-Heading">
     <h1 className="gradient_text">Do you want to step in to the future before others</h1>
     </div>
     <div className="GPT3_Footer-Btn">
     <p>Request Early Access</p>
     </div>
     <div className="GPT3_Footer-links">
      <div className="GPT3_Footer-links_logo">
        <img src={gpt3logo} alt="gpt3logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="GPT3_Footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="GPT3_Footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="GPT3_Footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
     </div>
     <div className="GPT3_Footer-Copyright">
     <p>@{year} GPT-3. All rights reserved.</p>
     </div>
    </div>
  )
}

export default Footer
