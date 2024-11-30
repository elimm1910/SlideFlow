import React from 'react';

// Style
import './Indicators.css'

function Indicators({ orden }) {
  let index = [0, 1, 2, 3];
  return (
    <div className='Indicator_Styled'>
      <div className='Indicator_Container'>
        {index.map((inde) =>
          <div key={inde} className={`Indicator ${orden === inde ? "Indicator_selected" : null}`} ></div>
        )}
      </div>
    </div>
  );
}

export default Indicators;