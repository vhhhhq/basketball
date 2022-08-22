import React from 'react';
import './Basketball.css';
import Line from '../../assets/image/Line.svg'
import Range from '../../components/Range/Range';
import Right from '../../assets/image/Right.svg';
import Left from '../../assets/image/Left.svg';
import Name from '../../components/Name/Name';


const Basketball = () => {
  return (
    <div className='container-basketball'>
        <div className='container-block-basketball'>
            <div className='content-block-basketball' >
                <p>Hall of fame</p>
            </div>
            <div className='title-block-start-basketball'>
                <p>  
                    basketball
                </p>
            </div>
            <div className='title-block-end-basketball'>
                <p>    
                    Hall of fame
                </p>
            </div>
            <div className="text-content-block-basketball">
                <p>
                    <p>The naismith memorial basketball hall of fame is home to more than</p>
                    <p>Four nundred iductees and more than 40 000 square feet of basketball history.
                        <img src={Left} alt="" className='img-btn-line'/>
                        <img src={Right} alt="" className='img-btn-line'/>
                    </p>
                </p>
            </div>
            <div className='basketball-year'>
                <p className='content-year'>
                    <span>2005</span>
                    <span>2006</span>
                    <span>2007</span>
                    <span>2008</span>
                    <span><p className='color-year'>2009</p></span>
                    <span>2010</span>
                    <span>2011</span>
                    <span>2012</span>
                </p>
            </div>
            <div className="content-range">
                <Range/>
            </div>
            <Name/>
            <div className='button-block-basketball'>
                <div className='btn-block-basketball'>
                    <p>Official Site
                    <img src={Line} alt="" /></p> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Basketball;