import React from 'react';
import './Footer.css';
import Picture from '../../assets/image/Picture.svg';
import Line from '../../assets/image/Line.svg';


function Footer() {
  return (
    <div className='container-footer'>
        <div className='container-block-footer'>
            <div className='content-block-footer' >
                <p>The application</p>
            </div>
            <div className='title-block-start-footer'>
                <p>The nike</p>
            </div>
            <div className='title-block-end-footer'>
                <p>App</p>
            </div>
            <div className="text-content-block-footer">
                <p>
                    Here you can find many interesting and useful from nike.
                    Download the application from nike.
                </p>
            </div>
            <div className="footer-pict">
                <img src={Picture} alt="" />
                <span>Nike Traning Club</span>
                <p>Home workouts & fitness plans</p>
            </div>
            <div className='button-block-footer'>
                <div className='btn-block-footer'>
                    <p>View all
                    <img src={Line} alt="" /></p> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Footer;