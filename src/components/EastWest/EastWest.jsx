import React from 'react';
import './EastWest.css';
import img from '../../assets/image/Rectangle.svg';


const EastWest = () => {
  return (
    <div className="container-east-west">
        <div className="east-container">
            <div className="east-text">
                <p className="east">east</p>
            </div>
            <div className="eastWest-card">
                <div className='eastWestImage'>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                </div>
            </div>
        </div>
        <div className="west-container">
            <div className="west-text">
                <p className="west">west</p>
            </div>
            <div className="eastWest-card">
                <div className='eastWestImage'>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                    <img src={img} alt='' className='img-eastWest'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EastWest;