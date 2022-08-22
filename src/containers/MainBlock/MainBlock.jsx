import React from 'react';
import './MainBlock.css';
import GroupLight from '../../assets/image/GroupLight.svg';
import Pict from '../../assets/image/Pict.svg';



const MainBlock = () => {
    return (
        <div className='main'>
            <div className="main-block">
                <div className="caption-main">
                    <li>Jersey</li>
                    <li>Nike & NBA Collaboration</li>
                </div>
                <div className="title-main">
                    <p>Jersey</p>
                    <img src={GroupLight} alt="" />
                    <p>Nba</p>
                </div>
                <div className="synopses-main">
                    <p>
                        whichever 
                        <span className='txt-color'> nba </span>
                        <span className='text-color'> team </span>      
                        your support, get your jersey here today.
                    </p>
                </div>
                <div className="pict-main">
                    <img src={Pict} alt="" />
                </div>
            </div>
        </div>
    );
  }
  
  export default MainBlock;