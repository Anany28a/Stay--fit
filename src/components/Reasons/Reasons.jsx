import React from 'react'
import './Reasons.css'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4..jpeg'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'


const Reasons = () => {
  return (
    <div className='Reasons' id="reasons">
           <div className="container">
      <div className="left-side">
        <img src={image1} alt=" " />
      </div>
      <div className="rightimgside">
        <div className="top-right">
          <img src={image2} alt=" " />
        </div>
        <div className="bottom-right">
          <img src={image3} alt=" " />
          <img src={image4} alt=" " />
        </div>
      </div>
    </div>
         

        <div className='right-side'>
        <span> some reasons</span>
        <div>
            <span className='stroke-text'>why</span>
            <span> choose us?</span>
        </div>
       <div className='details-r'>
          <div>
            <img src={tick} alt=""/>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>TAIN SMATER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt=""/>
            <span>RELATIVE PARTNRES</span>
          </div>
        </div>
          <span style={{color:"var(--gray)" , fontWeight:"light"}}>
           OUR PARTNERS </span>
           <div className='partners'>
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
           </div>
       </div>
        
    </div>
  )
}

export default Reasons