import React from 'react';
import EastWest from '../../components/EastWest/EastWest';
import './Piece.css';
import Line from '../../assets/image/Line.svg'


const Piece = () => {
  return (
    <div className='container-piece'>
        <div className='container-block-piece'>
            <div className='content-block-piece' >
                <p>Every team</p>
            </div>
            <div className='title-block-start-piece'>
                <p>  
                    <span>One </span>
                    store
                </p>
            </div>
            <div className='title-block-end-piece'>
                <p>
                    <span>Every </span>     
                    team
                </p>
            </div>
            <div className="text-content-block-piece">
                <p>SElect your favorite team to view it’s jersys.</p>
            </div>
            <EastWest/>
            <div className='button-block-piece'>
                <div className='btn-block-piece'>
                    <p>About Team
                    <img src={Line} alt="" /></p> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Piece;