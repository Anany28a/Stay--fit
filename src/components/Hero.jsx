import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import heroImageBack from '../assets/hero_image_back.png';

import caloriesImage from '../assets/calories.png';
import heroImage from '../assets/front_image.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className='hero' id="home">
            <div className='blur blur-h'></div>
            <div className='leftside'>
                <Header />

                {/* The Best Fitness Club Ad */}
                <div className='the-best-ad'>
                    <motion.div
                        initial={{ left: mobile ? '178px' : '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    />
                    <span>The Best Fitness Club</span>
                </div>

                {/* Hero heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your Ideal Body</span>
                    </div>
                    <div className="small">
                        In here we will help you to shape your ideal body with healthy living
                    </div>
                </div>

                {/* Fitness figures */}
                <div className='figure'>
                    <div>
                        <span><NumberCounter end={140} start={100} delay={4} prefix='+' /></span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div>
                        <span><NumberCounter end={978} start={100} delay={4} prefix='+' /></span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div>
                        <span><NumberCounter end={30} start={100} delay={4} prefix='+' /></span>
                        <span>PROGRAMS</span>
                    </div>
                </div>

                {/* Hero buttons */}
                <div className='hero-button'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>
            </div>

            <div className='rightside'>
                <button className="btn">Join Now</button>

                
                <motion.div
                    className='heart-rate'
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                >
                   
                </motion.div>

                {/* Hero images */}
                <img src={heroImage} alt="" className='hero-image' />
                <motion.img
                    src={heroImageBack} alt=""
                    className='hero-image-back'
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                />

                {/* Calories section */}
                <motion.div
                    className="calories"
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                >
                    <img src={caloriesImage} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 calories</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
