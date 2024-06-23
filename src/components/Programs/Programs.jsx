import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';


const Programs = () => {
  return (
    <div className='Programs' id="programs">
      <div className='program-head'>
        <span className='stroke-text'>Explore</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape your body</span>
      </div>
      <div className='program-categories'>
        {programsData.map((program, index) => (
          <div className='category' key={index}>
            <img src={program.image} alt="Program" />
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>JOIN NOW</span> 
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
