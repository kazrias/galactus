import "./Ufo.css";

import React from "react";

const Ufo = () => {
  return (
    <>
      <p className='ufo-text'>Your cart is empty.</p>
      <p className='ufo-text'>Add something!</p>
      <div className='scene'>
        <div className='ufo-contain'>
          <div className='tractor-beam'>
            <div className='dribbble'>
              <a
                href='https://dribbble.com/DXC'
                target='_blank'
                title='Do it...'
              ></a>
            </div>
          </div>
          <div className='ufo-lower'>
            <div className='lights'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className='ufo-upper'>
            <div className='cockpit'>
              <div className='glass'></div>
              <div className='alien'>
                <div className='eye'></div>
              </div>
              <div className='glass-edge'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Ufo);
