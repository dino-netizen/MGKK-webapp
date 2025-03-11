import React from 'react';
import heart_img from '../../assets/heart.png';
import eye_img from '../../assets/eye.png';
import flag_img from '../../assets/flag.png';
import './Core.css'; 

const Core = () => {
  return (
    <div className="container">
    
      <div className="box white">
        <img src={flag_img} alt="Flag" className="icon" />
        <h3>Mission</h3>
        <p>To empower businesses through innovative ICT and engineering
            solutions that enhance operational efficiency, drive technological
            advancement, and support sustainable growth.</p>
            <br />
        <p>To deliver high-quality ICT education and training that enables
            individuals and organizations to achieve their full potential and
            stay competitive in the digital era.</p>
      </div>

   
      <div className="box blue">
        <img src={eye_img} alt="Eye" className="icon" />
        <h3>Vision</h3>
        <p>To be a global leader in ICT and Engineering solutions, recognized
            for excellence, innovation, and commitment to client success.</p>
            <br />
        <p>To be a globally recognized leader in ICT training, known for
            excellence, innovation, and transformative educational
            experiences.</p>
      </div>

   
      <div className="box dark-blue">
        <img src={heart_img} alt="Heart" className="icon" />
        <h3>Core Values</h3>
        <p>wala pa lalagay</p>
      </div>
    </div>
  );
};

export default Core;
