import React from 'react';
import './Range.css';



const Range = () => {
  return (
    <div className='body-range'>
        <div className='range'>
            <div className="field">
                <div className="value left">1959</div>
                <input type="range" className='slider'/>
                <div className="value right">2019</div>
            </div>
        </div>
    </div>
  );
}

export default Range;