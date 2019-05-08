import React from 'react';
import spinner from './spinner2.gif';

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="loading"
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
}

export default Spinner;
