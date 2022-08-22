import React from 'react';
import './Name.css';
import Line from '../../assets/image/Line.svg'



const Name = () => {
  return (
    <div className='name'>
        <div className="name-basketball">
            <div className='name-txt'>
                <p className='name-jordan'>
                    Michael 
                    <span> jordan!</span>
                </p>
                <div className='button-name-basketball'>
                    <div className='btn-name-basketball'>
                        <p>Viewww
                            <img src={Line} alt="" /></p> 
                    </div>
                </div>
            </div>        
        </div>
        <div className="name-basketball">
            <div className='name-txt'>
                <p className='name-robinson'>
                    David 
                    <span> robinson</span>
                </p>
                <div className='button-name-basketball'>
                    <div className='btn-name-basketball'>
                        <p>View
                            <img src={Line} alt="" /></p> 
                    </div>
                </div>
            </div>        
        </div> 
        <div className="name-basketball">
            <div className='name-txt'>
                <p className='name-stockton'>
                    John 
                    <span> stockton</span>
                </p>
                <div className='button-name-basketball'>
                    <div className='btn-name-basketball'>
                        <p>View
                            <img src={Line} alt="" /></p> 
                    </div>
                </div>
            </div>        
        </div>
    </div> 
  );
}

export default Name;