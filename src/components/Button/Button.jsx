import React from 'react';
import './Button.css';
import Line from '../../assets/image/Line.svg';

const Button = () => {
  return (
    <div className='btn-block'>
        <p>View all
        <img src={Line} alt="" /></p> 
    </div>
  );
}

export default Button;