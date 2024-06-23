import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whitetick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
      <div className=' blur blur-p-1'></div>
      <div className=' blur blur-p-2'></div>
      <div className='programs-header' style={{ gap: '3rem' }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>WITH US</span>
      </div>

      <div className='plans'>
        {plansData.map((plan, index) => (
          <div className='plan' key={index}>
            <img src={plan.icon} alt='' /> {/* Assuming plan.icon is a valid image path */}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className='features'>
              {plan.features.map((feature, idx) => (
                <div className='feature' key={idx}>
                  <img src={whitetick} alt='' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benefits - </span>
            </div>
            <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
