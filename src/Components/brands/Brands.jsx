import React from 'react'
import "./Brands.css"
import { google,slack,atlassian,dropbox,shopify} from "./imports.js"
const Brands = () => {
  return (
    <div className='GPT3_Brands section_padding'>
     <div>
        <img src={google} alt="Google" />
     </div>

     <div>
        <img src={slack} alt="Slack" />
     </div>

     <div>
        <img src={atlassian} alt="Atlassian" />
     </div>

     <div>
        <img src={dropbox} alt="Dropbox" />
     </div>

     <div>
        <img src={shopify} alt="Shopify" />
     </div>
    </div>
  )
}

export default Brands
