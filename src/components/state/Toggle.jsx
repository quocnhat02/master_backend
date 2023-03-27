import React, { useState } from 'react';
import './ToggleStyles.css';

const Toggle = () => {
  const [on, setOn] = useState(false);

  const handleToggle = () => setOn((on) => !on);

  return (
    <>
      <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
      {/* <div className='toggle-control'>
        <div className='toggle-on' onClick={() => setOn(true)}>
          On
        </div>
        <div className='toggle-off' onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </>
  );
};

export default Toggle;
